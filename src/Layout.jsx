import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
    console.log(styles);
    return (
        <div>
            <div className={styles.navbar}>
                <Link className={styles.link} to="/">
                    <p className={styles.logo}>SESIUNEA 33</p>
                </Link>
                <div>
                    <Link className={styles.link} to="djsgadhagfdh">
                        Wrong Page
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
