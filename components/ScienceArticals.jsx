import React from 'react';
import '../styles/test.scss';
import { useEffect, useState } from 'react';
import Card from "../components/Card.jsx"
import { reactLocalStorage } from 'reactjs-localstorage';
import { useNavigate } from 'react-router-dom';


const ScienceArticals = () => {
    const [hist, setHist] = useState([])
    const [datatag, setDatatag] = useState([])
    const disUser = reactLocalStorage.get("thisUser")
    const history = useNavigate();


    const removeUser = (e) => {
        e.preventDefault();
        reactLocalStorage.clear();
        history("/log")
    }


    useEffect(() => {
        fetch('http://localhost:8000/getarticals')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(item => item.articalType === 'science');
                setHist(filteredData);
            })
            .catch(error => console.error(error));
        console.log(hist);
    }, []);
    return (
        <div className='item'>
            <div className="title">
                <h2>Science Articals</h2>
            <div className="accInfo">
                <h6>{disUser}</h6>
                <a>
                    <button onClick={(e) => removeUser(e)}>logout</button>
                </a>
                </div>
            </div>

            <div className="card-list">
                <div className="addArtical">
                
                    <a href="/test">
                    
                        <h4> write an artical</h4>
                    </a>
                </div>
                <div className="cards">

                
                {hist.map(card => (
                    <Card
                        key={card._id}
                        title={card.title}
                        content={card.content}
                        date={card.date}
                        tag={card.tag}
                        author={card.creatorName}
                        imgUrl = {card.imgUrl}

                    />
                ))}
                </div>

            </div>
        </div>
    );
}

export default ScienceArticals;
