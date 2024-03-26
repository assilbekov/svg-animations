import { CheckIcon, CircleStackIcon } from "@heroicons/react/24/outline";

export default function App() {
  return (
    <main className="w-full h-screen flex place-items-center justify-center">
      <section className="card">
        <div className="flex flex-col w-2/5 justify-between">
          <div className="flex flex-col gap-5">
            <CircleStackIcon className="w-14 rounded-lg bg-neutral-950/70 stroke-emerald-500 p-2 shadow-inner" />
            <h1 className="font-poppins text-neutral-200 tracking-wide text-2xl">Database</h1>
            <p className="-mt-2 font-poppins text-neutral-500 tracking-wide">
              Every project is a full Postgres database, the world's most
              trusted relational database.
            </p>
          </div>
          <div className="flex flex-col font-poppins text-neutral-200 tracking-wide">
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>100% portable</p>
            </span>
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>Built-in Auth with RLS</p>
            </span>
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>Easy to extend</p>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}