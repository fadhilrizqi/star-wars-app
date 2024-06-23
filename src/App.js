import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CharacterList />} />
        <Route exact path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
