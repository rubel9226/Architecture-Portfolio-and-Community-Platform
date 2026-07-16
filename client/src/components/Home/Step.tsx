interface StepProps {
  stepNum: string;
  title: string;
  desc: string;
}



export default function Step({ stepNum, title, desc }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-3 group">
      <div className="w-12 h-12 rounded-full bg-white border border-slate-200 group-hover:border-blue-600 text-slate-400 group-hover:text-blue-600 flex items-center justify-center font-black text-sm transition-all duration-300 relative z-10 bg-white">
        {stepNum}
      </div>
      <h3 className="font-bold text-sm text-slate-900 mt-2">{title}</h3>
      <p className="text-xs text-slate-500 max-w-45 leading-relaxed">{desc}</p>
    </div>
  );
}