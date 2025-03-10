import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const MainPage = () => {
    useEffect(() => {
        document.title = "Thomas's Portfolio";
    },[]);
    return (
        <div>
        <h1>Portfolio de Thomas</h1>
        <p>Génie logiciel - Polytechnique Montréal - 2022 à 2027</p>
        <Link to="/contact">Links</Link>
        </div>
    );
    }


export default MainPage;