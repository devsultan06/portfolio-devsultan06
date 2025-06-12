import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";

const App: React.FC = () => {
  // Initialize react query

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Home />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
