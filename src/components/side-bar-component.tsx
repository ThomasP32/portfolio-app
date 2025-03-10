import React from 'react';
import './side-bar-component.css';

const SideBar = () => {
    return (
        <div>
            <div className="sidebar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default SideBar;