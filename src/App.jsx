import "./App.css";
import StockDetailPage from "./pages/StockDetailPage";
import StockOverviewPage from "./pages/StockOverviewPage";
import { Routes, Router, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StockOverviewPage />} />  
        <Route path="/detail" element={<StockDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
