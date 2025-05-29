import { types, years } from "../constants/helpers";
import { useQueryContext } from "../contexts/QueryContext";
import Searchbar from "./Searchbar";

const SubContainerTop = () => {
  const { selectedType, setSelectedType, selectedYear, setSelectedYear } =
    useQueryContext();

  return (
    <div className="w-full max-w-xl mx-auto">
      <Searchbar />
      <div className="flex flex-col sm:flex-row gap-4 mt-5">
        <select
          className="w-full sm:w-1/2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedType}
          onChange={(e) => setSelectedType?.(e.target.value)}
        >
          <option value="" disabled>
            Select a Type
          </option>
          {types.map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>
        <select
          name="release-date"
          className="w-full sm:w-1/2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedYear}
          onChange={(e) => setSelectedYear?.(e.target.value)}
        >
          <option value="" disabled>
            Select release year
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SubContainerTop;
