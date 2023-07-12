import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
function App() {
    return (
        <div className="App">
            <Header />
            <div className="products-container">
                {products.map((product, index) => {
                    return <ProductCard key={index} data={product} />;
                })}
            </div>
        </div>
    );
}

export default App;
