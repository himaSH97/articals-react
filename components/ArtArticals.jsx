import React from 'react';
import '../styles/test.scss';
import Card from "../components/Card.jsx"
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';
import { useEffect, useState  } from 'react';


const ArtArticals = () => {
    const location = useLocation();
    const [hist, setHist] = useState([])
    const [datatag, setDatatag] = useState([])
    const disUser = reactLocalStorage.get("thisUser")
    const history = useNavigate();


    const removeUser = (e) =>{
        e.preventDefault();
        reactLocalStorage.clear();
        history("/log")
    }
    
    useEffect(() => {
        fetch('http://localhost:8000/getarticals')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(item => item.articalType === 'art');
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

                />
            ))}
            </div>

        </div>
    </div>
    );
}

export default ArtArticals;
