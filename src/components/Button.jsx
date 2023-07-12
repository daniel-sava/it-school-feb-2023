import "./Button.css";

export default function Button({ type, text, clickCallback, isDisabled }) {
    return (
        <button
            disabled={isDisabled}
            onClick={() => clickCallback()}
            className={`button ${type}`}
        >
            {text}
        </button>
    );
}
