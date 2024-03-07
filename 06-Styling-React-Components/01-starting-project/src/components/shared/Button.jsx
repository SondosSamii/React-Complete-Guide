export default function Button({ children, ...props }) {
  return (
    <button
      className="font-semibold uppercase text-[#1f2937] bg-[#f0b322] hover:bg-[#f0920e] rounded-md py-4 px-8"
      {...props}
    >
      {children}
    </button>
  );
}
