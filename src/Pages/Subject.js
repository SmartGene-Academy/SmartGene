import React from 'react'
import {useLocation} from 'react-router-dom';
import subjectData from '../data/subjectData'
import NavBar from "../Components/navbar"

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

    return (
        <>
            <NavBar />
            <h1>{subject}</h1>
            {data.map(item => (
                <div>
                    <h2> {item.id} </h2>
                    <p> {item.content} </p>

                </div>
            ))}
        </>
    );
}

export default Subject;