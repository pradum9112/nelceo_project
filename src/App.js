import "./App.css";
import AddCard from "./components/AddCard/AddCard";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewCard from "./components/ViewCard/ViewCard";
import EditCard from "./components/EditCard/EditCard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addcard" element={<AddCard />} />
          <Route path="/viewcard/:id" element={<ViewCard />} />
          <Route path="/editcard/:id" element={<EditCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
