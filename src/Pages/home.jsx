import React from 'react';
import NavBar from '../Components/navbar';
import './Styles/home.css'
import { Link, NavLink } from 'react-router-dom';

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
                <div className='intro'>SMARTGene</div>
                <div className='intro2'>Innovation Starts Here</div>
                <Link to="/SignUp"> 
                <svg className='join' xmlns="http://www.w3.org/2000/svg" width="334" height="91" viewBox="0 0 334 91" fill="none">
                    <path d="M0 45.5C0 20.371 20.371 0 45.5 0H288.5C313.629 0 334 20.371 334 45.5C334 70.629 313.629 91 288.5 91H45.5C20.371 91 0 70.629 0 45.5Z" fill="#EEAA00"/>
                </svg>
                </Link>
                <div className='join2'>Begin Your Journey</div>
                <svg className='ball-top' xmlns="http://www.w3.org/2000/svg" width="291" height="291" viewBox="0 0 291 291" fill="none">
                    <path d="M291 145.5C291 225.857 225.857 291 145.5 291C65.1426 291 0 225.857 0 145.5C0 65.1426 65.1426 0 145.5 0C225.857 0 291 65.1426 291 145.5Z" fill="#CC2255"/>
                </svg>
                <div className='ball-top-text'>Grade 6 - 12</div>
                <svg className='ball-middle' xmlns="http://www.w3.org/2000/svg" width="291" height="291" viewBox="0 0 291 291" fill="none">
                    <path d="M291 145.5C291 225.857 225.857 291 145.5 291C65.1426 291 0 225.857 0 145.5C0 65.1426 65.1426 0 145.5 0C225.857 0 291 65.1426 291 145.5Z" fill="#663366"/>
                </svg>
                <div className='ball-mid-text'>Academic Excellence</div>
            </div>
            <div className='body'>
                <svg className='c1' xmlns="http://www.w3.org/2000/svg" width="563" height="559" viewBox="0 0 563 559" fill="none">
                    <g filter="url(#filter0_d_29_99)">
                        <path d="M558.248 275.5C558.248 427.654 434.175 551 281.124 551C128.073 551 4 427.654 4 275.5C4 123.346 128.073 0 281.124 0C434.175 0 558.248 123.346 558.248 275.5Z" fill="#EEAA00"/>
                        <path d="M557.748 275.5C557.748 427.376 433.902 550.5 281.124 550.5C128.346 550.5 4.5 427.376 4.5 275.5C4.5 123.624 128.346 0.5 281.124 0.5C433.902 0.5 557.748 123.624 557.748 275.5Z" stroke="black"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_29_99" x="0" y="0" width="562.248" height="559" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_29_99"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_29_99" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <svg className='c2' xmlns="http://www.w3.org/2000/svg" width="727" height="731" viewBox="0 0 727 731" fill="none">
                    <path d="M726.232 365.5C726.232 567.36 563.819 731 363.473 731C163.127 731 0.713867 567.36 0.713867 365.5C0.713867 163.64 163.127 0 363.473 0C563.819 0 726.232 163.64 726.232 365.5Z" fill="#EE6622"/>
                </svg>
                <div className='c2_text'>Our Methodology</div>
                <svg className='c3' xmlns="http://www.w3.org/2000/svg" width="597" height="586" viewBox="0 0 597 586" fill="none">
                    <path d="M596.425 293C596.425 454.819 463.122 586 298.685 586C134.248 586 0.945557 454.819 0.945557 293C0.945557 131.181 134.248 0 298.685 0C463.122 0 596.425 131.181 596.425 293Z" fill="#663366"/>
                </svg>
                <div className='c3_text'>Certified Educators</div>
                <div className='scrollable-subjects'>
                    <svg className='scrollable-media' xmlns="http://www.w3.org/2000/svg" width="412" height="412" viewBox="0 0 412 412" fill="none">
                        <path d="M412 206C412 319.771 319.771 412 206 412C92.2294 412 0 319.771 0 206C0 92.2293 92.2294 0 206 0C319.771 0 412 92.2293 412 206Z" fill="#663366"/>
                    </svg>
                    <svg className='scrollable-media' xmlns="http://www.w3.org/2000/svg" width="412" height="412" viewBox="0 0 412 412" fill="none">
                        <path d="M412 206C412 319.771 319.771 412 206 412C92.2294 412 0 319.771 0 206C0 92.2293 92.2294 0 206 0C319.771 0 412 92.2293 412 206Z" fill="#EEAA00"/>
                    </svg>
                    <svg className='scrollable-media' xmlns="http://www.w3.org/2000/svg" width="412" height="412" viewBox="0 0 412 412" fill="none">
                        <path d="M412 206C412 319.771 319.771 412 206 412C92.2293 412 0 319.771 0 206C0 92.2293 92.2293 0 206 0C319.771 0 412 92.2293 412 206Z" fill="#EE6622"/>
                    </svg>
                    <svg className='scrollable-media' xmlns="http://www.w3.org/2000/svg" width="412" height="412" viewBox="0 0 412 412" fill="none">
                        <path d="M412 206C412 319.771 319.771 412 206 412C92.2293 412 0 319.771 0 206C0 92.2293 92.2293 0 206 0C319.771 0 412 92.2293 412 206Z" fill="#EEAA00"/>
                    </svg>
                </div>
            </div>
        </div>
    )
};

export default home;