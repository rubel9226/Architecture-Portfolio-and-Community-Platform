import LoadingGrid from "@/components/public-projects/LoadingGrid";

export default function Loading() {
    return (
        <main className="mx-auto max-w-7xl px-4 py-10">

        <div className="skeleton h-12 w-72" />

        <div className="mt-3 skeleton h-5 w-96" />

        <div className="mt-8 skeleton h-14 w-full rounded-xl" />

        <LoadingGrid />

        </main>
    );
}