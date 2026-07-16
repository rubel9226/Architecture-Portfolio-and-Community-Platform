// components/project-details/LoadingSkeleton.tsx
export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-8 max-w-7xl mx-auto px-4 py-12">
      <div className="h-[60vh] bg-slate-200 rounded-3xl w-full" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="h-8 bg-slate-200 rounded-xl w-1/3" />
          <div className="h-32 bg-slate-200 rounded-2xl w-full" />
          <div className="h-64 bg-slate-200 rounded-2xl w-full" />
        </div>
        <div className="space-y-6">
          <div className="h-48 bg-slate-200 rounded-2xl w-full" />
          <div className="h-32 bg-slate-200 rounded-2xl w-full" />
        </div>
      </div>
    </div>
  );
}