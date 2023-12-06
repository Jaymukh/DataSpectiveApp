import React, { useState, useEffect } from 'react'
import '../App.css';
import * as Data from '../data/Data'
import { useNavigate } from 'react-router-dom';
import { RouteConstants } from '../constants';
import Navbar from '../components/Navbar';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

function Questionnaire() {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(Data.questions.length).fill(''));

    const handleSelectChange = (event) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[activeItem] = event.target.value;
        setSelectedAnswers(newSelectedAnswers);
    };

    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers((prevSelectedAnswers) => ({
            ...prevSelectedAnswers,
            [questionId]: answer,
        }));
    };

    const handleNext = () => {
        if (activeItem < Data.questions.length - 1) {
            setActiveItem(activeItem + 1);
            console.log(selectedAnswers);
            const items = document.querySelectorAll('.progressbar ul li');
            items.forEach((item, index) => {
                const isSelected = selectedAnswers[index] !== '';
                const isActive = activeItem === index;
    
                if ((selectedAnswers[index] !== '') && isActive) {
                    item.classList.add('progress-green');
                    item.classList.remove('progress-gray');
                } 
                if ((selectedAnswers[index] == '') && isActive) {
                    item.classList.add('progress-gray');
                    item.classList.remove('progress-green');
                }
            });
        } else {
            console.log('Selected Answers:', selectedAnswers);
            navigate(RouteConstants.riskassessment);
        }
    };

    const handlePrev = () => {
        if (activeItem > 0) {
            setActiveItem(activeItem - 1);
        }
    };

    useEffect(() => {
        const items = document.querySelectorAll('.progressbar ul li');
        items.forEach((item, index) => {

            if (index < items.length - 1) {
                const nextItem = items[index + 1];
                const distance = nextItem.offsetLeft - item.offsetLeft - item.offsetWidth;
                const line = document.createElement('div');
                line.classList.add('line');
                line.style.width = `${distance}px`;
                item.appendChild(line);
            }
        });
    }, []);


    return (
        <div className='questionnaire'>
            <Navbar />
            <div className="questionnaire-page-content">
                <div className="container">
                    <div className='progressbar'>
                        <ul>
                            {Data.questions.map((item, index) => (
                                <li key={index}>
                                    <span >{(Data.questions.length - 1) === index ? 'Complete' : (index + 1)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='d-flex flex-row justify-content-around align-items-center'>
                        <button className='green-transparent' onClick={() => handlePrev()} disabled={activeItem === 0}><IoIosArrowBack fontSize={40} /></button>
                        <div className='d-flex flex-column justify-content-center align-items-center p-2' style={{ width: '60vw', height: '60vh' }}>
                            <div className="carousel-inner">
                                {Data.questions.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === activeItem ? 'active' : ''}`}
                                    >
                                        <h1 className='mb-3 text-green'>{index + 1}. {item.question}</h1>
                                        {(item.answers.length > 2)
                                            ? <select value={selectedAnswers[activeItem]} onChange={handleSelectChange} className='selectBox'>
                                                <option value="" disabled hidden>
                                                    Select an option
                                                </option>
                                                {item.answers.map((option, index) => (
                                                    <option key={index} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                            : <div className="radio-container">
                                                {
                                                    item.answers.map((answer, answerIndex) => (
                                                        <div key={answerIndex} className="radio-option">
                                                            <input
                                                                type="radio"
                                                                id={`answer_${item.id}_${answerIndex}`}
                                                                name={`radioGroup_${item.id}`}
                                                                className="radio-input"
                                                                checked={selectedAnswers[item.id] === answer}
                                                                onChange={() => handleAnswerChange(item.id, answer)}
                                                            />
                                                            <label
                                                                htmlFor={`answer_${item.id}_${answerIndex}`}
                                                                className="radio-label">{answer}</label>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className='green-transparent' onClick={() => handleNext()}><IoIosArrowForward fontSize={40} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questionnaire 