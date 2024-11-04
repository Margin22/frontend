// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoutes from "./Components/Routers/UserRoutes"; // Ensure correct relative path
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
