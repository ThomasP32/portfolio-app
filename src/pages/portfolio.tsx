import React from 'react';
import portfolioData from "../data/portfolio.json";
import "./portfolio.css";
import "../index.css";

const Portfolio = () => {
    const renderPortfolio = (portfolio) => { 
        return (
            <div className = "images-container">
                {
                    portfolio.map((project, id) => {
                        return (
                            <div key={id} className="image-box">
                                <img src={project.image} alt={project.name} className = "portfolio-image"/>
                                <div className="content">
                                    <p className="title">{project.name}</p>
                                    <h4 className="presentation">{project.presentation}</h4>
                                    <h4 className="description">{project.description}</h4>
                                    <p className="date">{project.date_started} à {project.date_finished}</p>
                                    <button className="btn" onClick={() => window.open(project.link)}>En savoir plus</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <>
            <div className="container portfolio-page">
                <h1 className = "page-title">
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
        </>
    );
}

export default Portfolio;
