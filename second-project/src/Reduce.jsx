import { useReducer } from "react";

export default function Reduce() {

    let initialstate = 0;

    let reducer = (state, action) => {
        if (action === "increment") {
            return state + 1;
        } else if (action === "decrement") {
            return state - 1;
        } else {
            return initialstate;
        }
    }

    let [count, dispatch] = useReducer(reducer, initialstate);

    return (
        <>
            <div>
                <h2>{count}</h2>

                <button onClick={() => dispatch("increment")}>
                    Increment
                </button>

                <button onClick={() => dispatch("decrement")}>
                    Decrement
                </button>
                <button onClick={() => dispatch("initialstate")}>
                    initialstate
                </button>
                

            </div>
        </>
    );
}