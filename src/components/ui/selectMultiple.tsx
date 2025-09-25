import { useState, ChangeEvent } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

type Option = {
  label: string;
  value: string;
};

type SelectMutipleProps = {
  options: Option[];
  placeholder?: string;
  value: Option[];
};

export default function SelectMutiple({
  options,
  placeholder = "Sélectionner",
  value
}: SelectMutipleProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Option[]>([]);

  const filteredOptions =
    query === ""
      ? options
      : options.filter((opt) =>
        opt.label.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <Combobox
      multiple
      value={value}
      onChange={setSelected}
      onClose={() => setQuery("")}
    >
      <div className="relative w-full max-h-64">
        <ComboboxInput
          className={clsx(
            "w-full rounded-lg border border-azure-800 py-1.5 pr-8 pl-3 text-sm/6 text-azure-800 bg-white"
          )}
          displayValue={(vals: Option[]) => vals.map((v) => v.label).join(", ")}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setQuery(event.target.value)
          }
          placeholder={placeholder}
        />

        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
          <ChevronDownIcon className="size-4 fill-azure-800 group-data-hover:fill-white" />
        </ComboboxButton>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--input-width)] rounded-b-lg bg-white p-1 [--anchor-gap:--spacing(1)] empty:invisible",
            "transition duration-100 ease-in data-leave:data-closed:opacity-0 shadow-lg h-64 overflow-y-auto"
          )}
        >
          {filteredOptions.map((option) => {
            const isSelected = selected.some((s) => s.value === option.value);
            return (
              <ComboboxOption
                key={option.value}
                value={option}
                className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:text-azure-800 hover:bg-gray-100"
              >
                <CheckIcon
                  className={clsx(
                    "size-4 fill-azure-800",
                    !isSelected && "invisible"
                  )}
                />
                <div className="text-sm/6 text-azure-800">{option.label}</div>
              </ComboboxOption>
            );
          })}
        </ComboboxOptions>
      </div>
    </Combobox>
  );
}
