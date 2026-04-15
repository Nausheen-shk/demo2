import { createContext, useState } from "react";
import User from "./User";

export const context = createContext();

export default function Context() {

    let [name, setName] = useState("nausheen");

    return (
        <>
            <context.Provider value={name}>
                <User />
            </context.Provider>
        </>
    );
}