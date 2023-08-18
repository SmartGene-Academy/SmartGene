import React from 'react';
import NavBar from '../Components/navbar';
import './Styles/home.css'

function home(){
    return(
        <div className='home'>
            <NavBar ></NavBar>
            <div className='top'>
                <svg className='semi' xmlns="http://www.w3.org/2000/svg" width="1736" height="640" viewBox="0 0 1736 640" fill="none">
                    <g filter="url(#filter0_d_13_8)">
                        <path d="M1732 0C1732 167.484 1640.97 328.109 1478.94 446.538C1316.91 564.967 1097.15 631.5 868 631.5C638.853 631.5 419.091 564.967 257.06 446.538C95.0284 328.109 4.00003 167.484 4 0.00012207L868 0H1732Z" fill="#344055"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_13_8" x="0" y="0" width="1736" height="639.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_8"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_8" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <svg className='tetra absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 88" fill="none">
                    <path d="M13.564 0L0 88L83 56.7949L13.564 0Z" fill="#663366"/>
                    <path d="M21.4542 54.8847L0 88L13.564 0L21.4542 54.8847Z" fill="#EE6622"/>
                    <path d="M21.4542 54.8847L83 56.7949L0 88L21.4542 54.8847Z" fill="#EEAA00"/>
                    <path d="M21.4542 54.8847L13.564 0L83 56.7949L21.4542 54.8847Z" fill="#CC2255"/>
                </svg>
                <svg className='cone' xmlns="http://www.w3.org/2000/svg" width="81" height="87" viewBox="0 0 81 87" fill="none">
                    <path d="M63.1523 84.413L80.6843 0L1.58026 34.286" fill="#CC2255"/>
                    <path d="M0.54324 35.086C-2.64176 39.401 8.48124 53.769 25.9662 67.927C43.4522 82.084 59.5302 89.739 62.7152 85.424C65.9002 81.109 54.7772 66.741 37.2922 52.583C19.8062 38.426 3.72824 30.771 0.54324 35.086Z" fill="#EEAA00"/>
                </svg>
                <svg className='cube' xmlns="http://www.w3.org/2000/svg" width="145" height="158" viewBox="0 0 145 158" fill="none">
                    <path d="M103.385 80.344L87.8884 0L0 34.409L15.4968 114.753L103.385 80.344Z" fill="#EEAA00"/>
                    <path d="M103.385 80.344L145 123.095L57.1115 157.504L15.4967 114.753L103.385 80.344Z" fill="#CC2255"/>
                    <path d="M129.503 42.751L145 123.095L103.385 80.344L87.8885 0L129.503 42.751Z" fill="#663366"/>
                    <path d="M0 34.409L15.4968 114.753L57.1115 157.504L41.6148 77.16L0 34.409Z" fill="#663366"/>
                    <path d="M129.503 42.751L87.8884 0L0 34.409L41.6148 77.16L129.503 42.751Z" fill="#CC2255"/>
                    <path d="M129.503 42.751L145 123.095L57.1116 157.504L41.6148 77.16L129.503 42.751Z" fill="#EEAA00"/>
                </svg>
                <svg className='cube2' xmlns="http://www.w3.org/2000/svg" width="97" height="98" viewBox="0 0 97 98" fill="none">
                    <path d="M43.871 36.3895L79.067 78.8279L35.196 98L0 55.5616L43.871 36.3895Z" fill="#663366"/>
                    <path d="M97 42.4384L61.804 0L43.871 36.3895L79.067 78.8279L97 42.4384Z" fill="#EEAA00"/>
                    <path d="M17.933 19.1721L61.804 0L43.871 36.3895L0 55.5616L17.933 19.1721Z" fill="#CC2255"/>
                    <path d="M97 42.4384L53.129 61.6105L35.196 98L79.067 78.8279L97 42.4384Z" fill="#CC2255"/>
                    <path d="M17.933 19.1721L53.129 61.6105L35.196 98L0 55.5616L17.933 19.1721Z" fill="#EEAA00"/>
                    <path d="M17.933 19.1721L53.129 61.6105L97 42.4384L61.804 0L17.933 19.1721Z" fill="#663366"/>
                </svg>
                <svg className='octo' xmlns="http://www.w3.org/2000/svg" width="98" height="90" viewBox="0 0 98 90" fill="none">
                    <path d="M21.135 12.618L53.901 0L0 58.312L21.135 12.618Z" fill="#EE6622"/>
                    <path d="M76.844 76.581L0 58.312L44.078 89.2L76.844 76.581Z" fill="#663366"/>
                    <path d="M76.844 76.581L97.98 30.887L53.901 0L76.844 76.581Z" fill="#EE6622"/>
                    <path d="M76.844 76.581L53.901 0L0 58.312L76.844 76.581Z" fill="#CC2255"/>
                </svg>
                <div className='text-slate-900'>SMARTGene</div>
            </div>
            
        </div>
    )
};

export default home;