import { Button, Form } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import "./Layout.css";
import { categories } from "./data/categories";

export default function Layout() {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <h2 className="title">
                        <Link className="link" to="/">
                            LOGO
                        </Link>
                    </h2>
                    <div className="search">
                        <Form.Control type="text" placeholder="Cauta articol" />
                        <Button variant="secondary">Primary</Button>
                    </div>
                </div>
            </div>
            <div className="categories-navbar">
                {categories.map((category) => {
                    return (
                        <Link
                            className="link"
                            key={category.id}
                            to={`/category/${category.id}`}
                        >
                            {category.title}
                        </Link>
                    );
                })}
            </div>
            <div className="content container">
                <Outlet />
            </div>
        </>
    );
}
