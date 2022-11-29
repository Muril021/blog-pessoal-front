import React, { useState } from "react";
import './Home.css';

function Home(){
    const [num, setNum] = useState(0); 

    return (
        <>
            <h1>Você clicou {num} vezes</h1>
            <button onClick={() => setNum(num - 1)}>-</button>
            <button onClick={() => setNum(num + 1)}>+</button>
        </>
    );
}

export { Home };