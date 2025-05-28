import { createContext, useContext, useState } from "react";

interface QueryContextProps {
  query: string;
  setQuery: (query: string) => void;
}

const QueryContext = createContext<QueryContextProps | null>(null);

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  return (
    <QueryContext.Provider
      value={{
        query,
        setQuery,
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
