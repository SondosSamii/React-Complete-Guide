export default function Button({ customClass, children, ...props }) {
  let buttonClasses = "cursor-pointer border-0 focus:outline-none";

  if (customClass === "text-button") {
    buttonClasses += " bg-none text-[#f0b322] hover:text-[#f0920e]";
  } else if (customClass === "button") {
    buttonClasses +=
      " font-semibold uppercase text-[#1f2937] bg-[#f0b322] hover:bg-[#f0920e] rounded-md py-4 px-8";
  } else {
    buttonClasses += " bg-none";
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
