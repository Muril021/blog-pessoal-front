import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { changeClicks } from "../../store/clicks/actions";
import { clicksState } from "../../store/clicks/clicksReducer";
import './Home.css';

function Home(){
    const num = useSelector<clicksState, clicksState['clicks']>(
        (state) => state.clicks
    );
    const dispatch = useDispatch();
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
            <button onClick={() => dispatch(changeClicks(num - 1))}>-</button>
            <button onClick={() => dispatch(changeClicks(num + 1))}>+</button>
        </>
    );
}

export { Home };