import React from 'react'
import {useLocation} from 'react-router-dom';
import subjectData from '../data/subjectData'
import NavBar from "../Components/navbar"
import './Styles/Subject.css'


const getSubjectFromPath = (path) => {
    console.log(path);
    if (path === '/Math') return 'math'
    if (path === '/CS') return 'cs'
    if (path === '/Biology') return 'biology'
    return 'english'
}

const getDataForSubject = (subject) => {
    return subjectData[subject]
}

function Subject(){
    const location = useLocation();
    const { pathname } = location;
    const subject = getSubjectFromPath(pathname);
    const data = getDataForSubject(subject)
    const capitalSubject = subject.charAt(0).toUpperCase() + subject.slice(1)


    return (
        <>
            <NavBar />
            <div className='container'>
                <h1 className='center'>{capitalSubject}</h1>
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