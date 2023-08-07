import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../data/categories";

import Articles from "../components/Articles";
import "./Category.css";

export default function Category() {
    const { id } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const category = categories.filter(
            (category) => category.id === Number(id)
        )[0];
        setCategory(category);
    }, [id]);

    return (
        <>
            {category && (
                <div className="container">
                    <h1 className="title">{category.title}</h1>
                    <Articles categoryId={category.id} />
                </div>
            )}
        </>
    );
}
