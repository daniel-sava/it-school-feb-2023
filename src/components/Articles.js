import { useEffect, useState } from "react";
import { articles } from "../data/articles";

import { Link, useOutletContext } from "react-router-dom";
import "./Articles.css";

export default function Articles({ categoryId, currentArticleId }) {
    const [articlesList, setArticlesList] = useState(articles);
    const [searchArticlesList, setSearchArticlesList] = useState(articles);
    const { search } = useOutletContext();

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

        setSearchArticlesList(
            articlesList.filter((article) => {
                const searchStringIndex = article.title
                    .toLowerCase()
                    .search(search.toLowerCase());
                if (searchStringIndex !== -1) {
                    article.searchIndex = searchStringIndex;
                }

                return searchStringIndex !== -1;
            })
        );
    }, [categoryId, currentArticleId, search]);

    return (
        <div className="articles">
            {searchArticlesList.map((article) => {
                return (
                    <div key={article.id} className="article">
                        <img src={article.image} />
                        <h3 className="title">
                            <Link
                                className="link"
                                to={`/article/${article.id}`}
                            >
                                {article.title.substring(
                                    0,
                                    article.searchIndex
                                )}
                                <mark>
                                    {article.title.substring(
                                        article.searchIndex,
                                        article.searchIndex + search.length
                                    )}
                                </mark>
                                {article.title.substring(
                                    article.searchIndex + search.length,
                                    article.title.length
                                )}
                            </Link>
                        </h3>
                        <p>{article.shortDescription}</p>
                    </div>
                );
            })}
        </div>
    );
}
