
interface TestimonialCardProps {
  avatar: string;
  name: string;
  role: string;
  university: string;
  rating: number;
  comment: string;
}

export default function TestimonialCard({ avatar, name, role, university, rating, comment }: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col justify-between space-y-6">
      <p className="text-sm text-slate-600 leading-relaxed italic">"{comment}"</p>
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h4 className="text-sm font-bold text-slate-900">{name}</h4>
          <p className="text-[11px] text-slate-400 font-medium">{role} • {university}</p>
        </div>
      </div>
    </div>
  );
}