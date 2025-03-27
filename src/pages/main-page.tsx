import React, { useEffect } from 'react';
const MainPage = () => {
    useEffect(() => {
        document.title = "Thomas's Portfolio";
    },[]);
    return (
        <div>
        <h1>Portfolio de Thomas</h1>
        <p>Génie logiciel - Polytechnique Montréal - 2022 à 2027</p>
        </div>
    );
    }


export default MainPage;