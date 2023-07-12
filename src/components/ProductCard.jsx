import { useState } from "react";
import Button from "./Button";
import "./ProductCard.css";
import Title from "./Title";

export default function ProductCard({ data }) {
    const [countAddedToFav, setCountAddedToFav] = useState(0);
    const [quantity, setQuantity] = useState(data.quantity);

    let addToFavCallback = () => {
        setCountAddedToFav(countAddedToFav + 1);
    };

    let addToCartCallback = () => {
        setQuantity((prevQuantity) => (prevQuantity > 0 ? quantity - 1 : 0));
    };

    return (
        <div className="ProductCard">
            <img className="product-image" src={data.image} />
            <Title className="product-title" text={data.title} />
            <p className="product-description">{data.description}</p>
            <p className={`product-quantity ${quantity ? "green" : "red"}`}>
                {quantity ? "In Stoc" : "Stoc Epuizat"}: {quantity}
            </p>
            {countAddedToFav !== 0 && (
                <p className="product-added-to-fav">
                    Adaugat la favorite de: {countAddedToFav} ori
                </p>
            )}
            <input
                style={{ marginBottom: "1rem", marginRight: "0.25rem" }}
                type="text"
                placeholder="Nume"
            />
            <input
                style={{ marginBottom: "1rem" }}
                type="email"
                placeholder="example@google.com"
            />
            <div className="product-buttons">
                <Button
                    clickCallback={addToFavCallback}
                    text="Adauga la favorite"
                    type="danger"
                />
                <Button
                    clickCallback={addToCartCallback}
                    text="Adauga in cos"
                    type="primary"
                    isDisabled={!quantity}
                />
            </div>
        </div>
    );
}
