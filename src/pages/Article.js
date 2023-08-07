import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecommendedArticles from "../components/RecommendedArticles";
import { articles } from "../data/articles";

export default function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        setArticle(articles.filter((article) => article.id === Number(id))[0]);
    }, [id]);

    return (
        <>
            {article && (
                <>
                    <div className="article">
                        <h1>{article.title}</h1>
                        <img src={article.image} alt={article.title} />
                        <p>{article.content}</p>
                    </div>

                    <RecommendedArticles
                        categoryId={article.category}
                        currentArticleId={article.id}
                    />
                </>
            )}
        </>
    );
}
