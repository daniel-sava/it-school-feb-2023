import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import RecommendedArticles from "../components/RecommendedArticles";
import { articles } from "../data/articles";

export default function Article() {
    const commentInputRef = useRef(null);
    const userInputRef = useRef(null);

    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [user, setUser] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        setArticle(articles.filter((article) => article.id === Number(id))[0]);
    }, [id]);

    function addComment() {
        setArticle((prev) => {
            return {
                ...prev,
                comments: [...prev.comments, { user: "You", comment }],
            };
        });

        // userInputRef.current.value = "";
        commentInputRef.current.value = "";
    }

    return (
        <>
            {article && (
                <>
                    <div className="article">
                        <h1>{article.title}</h1>
                        <img src={article.image} alt={article.title} />
                        <p>{article.content}</p>
                    </div>

                    {article.comments.length ? (
                        <>
                            <h5>Comentarii</h5>
                            {article.comments.map((comment, index) => {
                                return (
                                    <div key={index}>
                                        <h6>{comment.user}</h6>
                                        <p>{comment.comment}</p>
                                    </div>
                                );
                            })}
                        </>
                    ) : (
                        <p>
                            <FontAwesomeIcon icon={faComment} />
                            Acest articol nu are comentarii
                        </p>
                    )}

                    <div className="comments">
                        {/* <Form.Control
                            ref={userInputRef}
                            onChange={(event) => {
                                setUser(event.target.value);
                            }}
                            type="text"
                            placeholder="Nume utilizator"
                        /> */}
                        <Form.Control
                            ref={commentInputRef}
                            onChange={(event) => {
                                setComment(event.target.value);
                            }}
                            type="text"
                            placeholder="Adauga un comentariu"
                        />
                        <Button
                            disabled={!comment}
                            variant="secondary"
                            onClick={addComment}
                        >
                            Adauga comentariu
                        </Button>
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
