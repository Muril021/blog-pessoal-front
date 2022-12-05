import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Home.css';

function Home(){
    const [num, setNum] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = `Clicou ${num} vezes`

        if (num > 10) {
            navigate('/about');
        }

        return () => {
            
        }
    }, [num]);

    return (
        <>
            <h1>Você clicou {num} vezes</h1>
            <button onClick={() => setNum(num - 1)}>-</button>
            <button onClick={() => setNum(num + 1)}>+</button>
        </>
    );
}

export { Home };