export default function GeneralField({ label, placeholder, id, type = "text", ...props }) {
  const fieldId = id || label?.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className="flex flex-col gap-2">
      <label 
        htmlFor={fieldId}
        className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]"
      >
        {label}
      </label>
      <input
        id={fieldId}
        type={type}
        placeholder={placeholder}
        className="bg-transparent border-x-transparent border-t-transparent border-b-2 border-white/10 py-3 
                   focus:outline-none focus:ring-0 focus:border-x-transparent focus:border-t-transparent focus:border-b-primary text-white"
        {...props}
      />
    </div>
  );
}