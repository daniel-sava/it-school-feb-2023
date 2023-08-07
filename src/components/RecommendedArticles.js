import Articles from "./Articles";

export default function RecommendedArticles({ categoryId, currentArticleId }) {
    return (
        <>
            <h3>Citeste si urmatoarele articole</h3>
            <Articles
                categoryId={categoryId}
                currentArticleId={currentArticleId}
            />
        </>
    );
}
