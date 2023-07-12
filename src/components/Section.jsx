import "./Section.css";
import SessionForm from "./SessionForm";

export default function Section(props) {
    return (
        <div className="section">
            <h3 className="title">{props.title}</h3>
            {props.children}
            <SessionForm onEnroll={props.onEnroll} />
        </div>
    );
}
