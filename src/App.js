import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";

// import GlobalStyles from "./styles/global";
import './styles/global.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <GlobalStyles /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
