import { cn } from '@/utilities/ui'

export type BannerProps = {
  title: string,
  color: string
};

export default function Banner({ title, color, className }: BannerProps) {
  return (
    <h2 className={cn("text-4xl text-white font-bold pt-18 py-5 px-6", className)}>
      {title}
    </h2>
  );
}
