export default function LoadingGrid() {
    return (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
            <div
            key={i}
            className="overflow-hidden rounded-2xl border border-base-300"
            >
            <div className="skeleton h-60 w-full" />

            <div className="space-y-4 p-5">

                <div className="skeleton h-6 w-3/4" />

                <div className="flex gap-3">

                <div className="skeleton h-10 w-10 rounded-full" />

                <div className="flex-1 space-y-2">
                    <div className="skeleton h-4 w-28" />
                    <div className="skeleton h-3 w-20" />
                </div>

                </div>

                <div className="skeleton h-4 w-full" />
                <div className="skeleton h-4 w-2/3" />

                <div className="flex gap-2">
                <div className="skeleton h-7 w-16 rounded-full" />
                <div className="skeleton h-7 w-16 rounded-full" />
                <div className="skeleton h-7 w-16 rounded-full" />
                </div>

            </div>

            </div>
        ))}
        </div>
    );
}