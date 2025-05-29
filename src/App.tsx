import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieDetail from "./components/MovieDetail";
import { QueryProvider } from "./contexts/QueryContext";

function App() {
  return (
    <QueryProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
          <Header />
          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<Navigate to="movies" />} />
              <Route path="/movies" element={<Container />} />
              <Route path="/movies/:id" element={<MovieDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryProvider>
  );
}

export default App;
