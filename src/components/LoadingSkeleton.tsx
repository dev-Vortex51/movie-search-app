export const LoadingSkeleton = () => (
  <div className="animate-pulse max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto mt-6 xs:mt-10 px-2 xs:px-4 sm:px-6 md:px-8">
    <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
      <div className="w-full max-w-xs xs:max-w-sm lg:w-96 h-64 xs:h-80 sm:h-[28rem] bg-gray-300 dark:bg-gray-800 rounded-xl shadow-inner mx-auto" />

      <div className="flex flex-col flex-grow space-y-4 xs:space-y-6">
        <div className="h-8 xs:h-12 bg-gray-300 dark:bg-gray-800 rounded w-3/4" />

        <div className="flex gap-2 xs:gap-3 flex-wrap">
          <div className="h-6 bg-gray-300 dark:bg-gray-800 rounded-full w-12 xs:w-16" />
          <div className="h-6 bg-gray-300 dark:bg-gray-800 rounded-full w-16 xs:w-20" />
          <div className="h-6 bg-gray-300 dark:bg-gray-800 rounded-full w-20 xs:w-24" />
          <div className="h-6 bg-gray-300 dark:bg-gray-800 rounded-full w-10 xs:w-12" />
        </div>

        <div className="h-6 bg-gray-300 dark:bg-gray-800 rounded w-24 xs:w-32" />

        <div className="space-y-2 xs:space-y-3">
          <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-full" />
          <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-full" />
          <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-5/6" />
        </div>

        <div className="mt-4">
          <div className="h-5 bg-gray-300 dark:bg-gray-800 rounded w-32 mb-2" />
          <div className="flex gap-2 flex-wrap">
            <div className="h-8 w-20 bg-gray-300 dark:bg-gray-800 rounded-full" />
            <div className="h-8 w-16 bg-gray-300 dark:bg-gray-800 rounded-full" />
            <div className="h-8 w-24 bg-gray-300 dark:bg-gray-800 rounded-full" />
            <div className="h-8 w-20 bg-gray-300 dark:bg-gray-800 rounded-full" />
          </div>
        </div>

        <div className="flex gap-4 xs:gap-6 flex-wrap">
          <div className="h-10 xs:h-12 bg-gray-300 dark:bg-gray-800 rounded-xl w-28 xs:w-40" />
          <div className="h-10 xs:h-12 bg-gray-300 dark:bg-gray-800 rounded-xl w-28 xs:w-40" />
        </div>
      </div>
    </div>
  </div>
);
