export default function LabeledInput({ label, invalid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    labelClasses += " text-[#f87171]";
    inputClasses += " text-[#ef4444] bg-[#fed2d2] border-[#f73f3f]";
  } else {
    labelClasses += " text-[#6b7280]";
    inputClasses += " text-[#374151] bg-[#d1d5db]";
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
