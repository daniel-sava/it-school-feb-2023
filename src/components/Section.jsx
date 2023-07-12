import styles from "./Section.module.css";
import SessionForm from "./SessionForm";

export default function Section(props) {
    return (
        <div className={styles.section}>
            <h3 className={styles.title}>{props.title}</h3>
            {props.children}
            <SessionForm onEnroll={props.onEnroll} />
        </div>
    );
}
