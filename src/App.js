import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Article from "./pages/Article";
import Category from "./pages/Category";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/article/:id" element={<Article />} />
      </Route>
    </Routes>
  );
}

export default App;
