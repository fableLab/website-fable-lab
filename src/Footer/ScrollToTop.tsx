'use client';

export default function ScrollToTop() {
  return (
    <div
      className="md:col-span-1 col-span-12 text-[#ffed38] px-8 pt-4 pb-8 cursor-pointer"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <img src="/arrows/arrow-footer.svg" className="md:w-3/4 2xl:w-1/4 mx-auto" alt="scroll to the top button" />
      <p className="text-center mt-3">Retour en haut</p>
    </div>
  );
}
