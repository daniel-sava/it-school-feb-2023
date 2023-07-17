import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
    return (
        <div>
            <div className={styles.navbar}>
                <Link className={styles.link} to="/">
                    <p className={styles.logo}>SESIUNEA 33-34</p>
                </Link>
                <div>
                    <Link className={styles.link} to="shopping-list">
                        Shopping List
                    </Link>
                    <Link className={styles.link} to="about">
                        About
                    </Link>
                    <Link to="/login">
                        <Button variant="contained">Login</Button>
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
}
