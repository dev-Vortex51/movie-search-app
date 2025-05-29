export const MovieCast = ({ actors }: { actors?: string }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
      Casts
    </h2>
    <div className="flex flex-wrap gap-2">
      {actors && actors !== "N/A" ? (
        actors.split(",").map((actor) => (
          <span
            key={actor.trim()}
            className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
          >
            {actor.trim()}
          </span>
        ))
      ) : (
        <span className="text-gray-500 dark:text-gray-400 text-sm">
          No cast information available.
        </span>
      )}
    </div>
  </section>
);
