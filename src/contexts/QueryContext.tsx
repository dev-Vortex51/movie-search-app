import { createContext, useContext, useEffect, useState } from "react";

interface QueryContextProps {
  query: string;
  setQuery: (query: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const QueryContext = createContext<QueryContextProps | null>(null);

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <QueryContext.Provider
      value={{
        query,
        setQuery,
        selectedType,
        setSelectedType,
        selectedYear,
        setSelectedYear,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

const useQueryContext = () => {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("useQueryContext must be used within a QueryProvider");
  }
  return context;
};

export { QueryProvider, useQueryContext };
