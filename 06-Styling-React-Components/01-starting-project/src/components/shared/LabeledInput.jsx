export default function LabeledInput({ label, invalid, ...props }) {
  let invalidLabelClasses = "text-[#6b7280]";
  let invalidInputClasses = "text-[#374151] bg-[#d1d5db]";

  if (invalid) {
    invalidLabelClasses = "text-[#f87171]";
    invalidInputClasses = "text-[#ef4444] bg-[#fed2d2] border-[#f73f3f]";
  }

  return (
    <p>
      <label
        className={`block mb-2 text-xs font-bold tracking-wide uppercase ${invalidLabelClasses}`}
      >
        {label}
      </label>
      <input
        className={`w-full px-3 py-2 leading-tight border rounded shadow ${invalidInputClasses}`}
        {...props}
      />
    </p>
  );
}
