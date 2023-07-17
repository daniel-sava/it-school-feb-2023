import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageDoesNotExist from "./pages/PageDoesNotExist";
import Shopping from "./pages/Shopping";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="shopping-list" element={<Shopping />} />
                <Route path="*" element={<PageDoesNotExist />} />
            </Route>
        </Routes>
    );
}

export default App;
