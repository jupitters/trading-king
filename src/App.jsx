import "./App.css";
import StockDetailPage from "./pages/StockDetailPage";
import StockOverviewPage from "./pages/StockOverviewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StockOverviewPage />} />  
        <Route path="/detail" element={<StockDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
