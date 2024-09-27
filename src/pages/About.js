import aboutBackground from './about.png';

import "./pages.css"

export default function About(){

    const aboutStyle = {
        backgroundImage: `url(${aboutBackground})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        

      };
    return (
        <div style={aboutStyle}>
            <div className='container'>

                <h1 className='headings'>About</h1>
                <p className='paragraph'> Kurzgesagt is dedicated to making science and philosophy accessible to everyone, <br /> creating visually stunning videos that spark curiosity and inspire understanding of the world around us.</p>
            </div>
    
    </div>
    )
}