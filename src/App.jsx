import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AddCreator from "./pages/AddCreator.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import EditCreator from "./pages/EditCreator.jsx";
import ShowCreators from "./pages/ShowCreators.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-creator" element={<AddCreator />} />
        <Route path="/edit-creator/:id" element={<EditCreator />} />
        <Route path="/show-creators" element={<ShowCreators />} />
        <Route path="/view-creator/:id" element={<ViewCreator />} />
      </Routes>
    </>
  );
};
export default App;
