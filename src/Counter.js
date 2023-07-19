import { useReducer, useRef } from "react";

// ENUM
const CounterActions = {
    Increase: "increase",
    Decrease: "decrease",
    CustomValue: "customValue",
};

const Language = {
    Romana: "ro",
    Engleza: "en",
};

function reducer(state, action) {
    switch (action.type) {
        case CounterActions.Increase:
            state = state + 1;
            break;
        case CounterActions.Decrease:
            state = state - 1;
            break;
        case CounterActions.CustomValue:
            state = action.payload.customValue;
            break;
    }

    return state;
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, 0);
    const customInputValue = useRef();

    return (
        <>
            <h2 lang={Language.Romana}>Count {state}</h2>
            <button
                onClick={() => {
                    dispatch({ type: CounterActions.Increase });
                }}
            >
                Increase Count
            </button>
            <button
                onClick={() => {
                    dispatch({ type: CounterActions.Decrease });
                }}
            >
                Decrease Count
            </button>
            <input ref={customInputValue} placeholder="Set custom value" />
            <button
                onClick={() => {
                    dispatch({
                        type: CounterActions.CustomValue,
                        payload: {
                            customValue: Number(customInputValue.current.value),
                        },
                    });
                }}
            >
                Set custom value
            </button>
        </>
    );
}
