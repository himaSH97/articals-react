import React from 'react';
import Card2 from "../components/Card2.jsx"
import { useLocation } from 'react-router-dom';
import "../styles/homepage.scss"
import { reactLocalStorage } from 'reactjs-localstorage';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../UserContext.cjs';

const HomePage = () => {
    const location = useLocation();
    const { user, setUser } = useContext(UserContext);
    const disUser = reactLocalStorage.get("thisUser")

    return (


        <div className='homepage'>
            <div className='header'>
                <div>
                <h1>Welcome to Nexus </h1>
                </div>
                <div>
                    <h2>{disUser}</h2>
                </div>
                
            </div>


            <div className="category" >
                <a href="/homepage/artarticals">
                    <Card2 className="cad" imageSrc={"../img/art.jpg"} />
                </a>

                <a href="/histarticals">
                    <Card2 className="cad" imageSrc={"../img/history.png"} />
                </a>
                <a href="/sciencearticals">
                    <Card2 className="cad" imageSrc={"../img/science.jpg"} />
                </a>
                <a href="">
                    <Card2 className="cad" imageSrc={"../img/img.jpg"} />
                </a>



            </div>
            <h3>Click on a tile to go to your favarite artical section</h3>
        </div>
    );
}

export default HomePage;
