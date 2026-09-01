import { HiOutlineChevronDown } from "react-icons/hi";

export default function GeneralSelect({ label, options, ...props }) {
  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">
        {label}
      </label>

      <div className="relative">
        <select
          {...props}
          className="w-full bg-transparent py-3 text-white transition-all font-medium appearance-none cursor-pointer
                     border-none border-b-2 border-b-white/10
                     outline-none focus:outline-none focus:ring-0 focus:ring-offset-0
                     focus:border-t-transparent focus:border-x-transparent focus:border-b-primary"
          style={{ boxShadow: "none" }} 
        >
          {options.map((opt, index) => (
            <option key={index} className="bg-zinc-900 text-white" value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
          <HiOutlineChevronDown className="text-slate-500 size-4" />
        </div>
      </div>
    </div>
  );
}
