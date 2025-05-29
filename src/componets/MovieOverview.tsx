export const MovieOverview = ({ overview }: { overview: string }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">
      Overview
    </h2>
    <p className="leading-relaxed text-gray-700 dark:text-gray-200 whitespace-pre-line">
      {overview || "No overview available."}
    </p>
  </section>
);
