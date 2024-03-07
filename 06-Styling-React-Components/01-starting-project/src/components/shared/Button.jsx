export default function Button({ customClass, children, ...props }) {
  let buttonClasses =
    "font-semibold uppercase text-[#1f2937] bg-[#f0b322] hover:bg-[#f0920e] rounded-md py-4 px-8";

  if (customClass === "text-button") {
    buttonClasses = "text-[#f0b322] hover:text-[#f0920e]";
  }

  return (
    <button
      className={`cursor-pointer border-0 bg-none focus:outline-none ${buttonClasses}`}
      {...props}
    >
      {children}
    </button>
  );
}
