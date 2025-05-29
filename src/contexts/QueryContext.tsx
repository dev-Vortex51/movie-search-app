import { createContext, useContext, useState } from "react";

interface QueryContextProps {
  query: string;
  setQuery: (query: string) => void;
  selectedType?: string;
  setSelectedType?: (Type: string) => void;
  selectedYear?: string;
  setSelectedYear?: (year: string) => void;
}

const QueryContext = createContext<QueryContextProps | null>(null);

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  return (
    <QueryContext.Provider
      value={{
        query,
        setQuery,
        selectedType,
        setSelectedType,
        selectedYear,
        setSelectedYear,
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
