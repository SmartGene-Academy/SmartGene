import React from 'react'
import {useLocation} from 'react-router-dom';
import subjectData from '../data/subjectData'
import NavBar from "../Components/navbar"
import './Styles/Subject.css'


const getSubjectFromPath = (path) => {
    console.log(path);
    if (path === '/Math') return 'math'
    if (path === '/ComputerScience') return 'cs'
    if (path === '/Biology') return 'biology'
    return 'english'
}

const getQuoteFromPath = (path) => {
    console.log(path);
    if (path === '/Math') return 'meth'
    if (path === '/ComputerScience') return 'cs'
    if (path === '/Biology') return 'Discover the magic of life!'
    return 'A writer only begins a book. A reader finished it - Samuel Johnson'
}

const getDataForSubject = (subject) => {
    return subjectData[subject]
}

function Subject(){
    const location = useLocation();
    const { pathname } = location;
    const subject = getSubjectFromPath(pathname);
    const data = getDataForSubject(subject)
    const capitalSubject = subject.toUpperCase()


    return (
        <>
            <NavBar />
            <div className='container'>
                <h1 className='center'>{capitalSubject}</h1>
                <h3 className='center'>{getQuoteFromPath(pathname)}</h3>
                {data.map(item => (
                    <div className='box'>
                        <h3 className='data-item'> {item.id} </h3>
                        <p className='data'> {item.content} </p>

                    </div>
                ))}
            </div>
        </>
    );
}

export default Subject;