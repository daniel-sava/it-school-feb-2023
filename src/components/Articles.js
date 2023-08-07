import { useEffect, useState } from "react";
import { articles } from "../data/articles";

import { Link } from "react-router-dom";
import "./Articles.css";

export default function Articles({ categoryId, currentArticleId }) {
    const [articlesList, setArticlesList] = useState(articles);

    useEffect(() => {
        if (categoryId) {
            setArticlesList(
                articles.filter((article) => article.category === categoryId)
            );
        }

        if (currentArticleId) {
            setArticlesList((prev) => {
                return prev.filter((article) => {
                    return article.id !== currentArticleId;
                });
            });
        }
    }, [categoryId, currentArticleId]);

    return (
        <div className="articles">
            {articlesList.map((article) => {
                return (
                    <div key={article.id} className="article">
                        <img src={article.image} />
                        <h3 className="title">
                            <Link
                                className="link"
                                to={`/article/${article.id}`}
                            >
                                {article.title}
                            </Link>
                        </h3>
                        <p>{article.shortDescription}</p>
                    </div>
                );
            })}
        </div>
    );
}
