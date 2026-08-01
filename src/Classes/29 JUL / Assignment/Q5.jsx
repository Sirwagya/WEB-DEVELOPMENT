import React from "react";
import { useState } from "react";

const Q5 = ({ data }) => {
    const [search, setSearch] = useState("");
    const [todo, setTodo] = useState(data || []);

    const HandleClick = (id) => {
        return () => {
            setTodo((prevTodos) => prevTodos.filter((item) => item.id !== id));
        };
    };

    const lowerSearch = search.toLowerCase().trim();
    const visibleTodos = todo.filter((item) =>
        item.title.toLowerCase().includes(lowerSearch)
    );

    return (
        <>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
            />

            {visibleTodos.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <button onClick={HandleClick(item.id)}>Delete</button>
                </div>
            ))}
        </>
    );
};

export default Q5;