import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage"
import Trees from "./pages/Trees";
import AboutUs from "./pages/AboutUs";

function App() {
  return(
      <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}></Route>
                <Route path="/register" element={<RegisterPage/>}></Route>
                <Route path="/home" element={<HomePage/>}></Route>
                <Route path="/about" element={<AboutUs/>}></Route>
                <Route path="/trees" element={<Trees/>}></Route>
            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App;
