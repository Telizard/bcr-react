import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/home";
import Search from "./searchform";

import SearchResult from "./searchresult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/searchform" element={<Search />} />
        <Route path="/result" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
