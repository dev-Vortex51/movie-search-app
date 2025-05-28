import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Container from "./componets/Container";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import MovieDetail from "./componets/MovieDetail";
import { QueryProvider } from "./contexts/QueryContext";

function App() {
  return (
    <QueryProvider>
      <Router>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen ">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="movies" />} />
            <Route path="/movies" element={<Container />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </QueryProvider>
  );
}

export default App;
