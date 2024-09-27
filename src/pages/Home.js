
import HomeBackground from './home.png';
import "./pages.css"

export default function Home(){
    const HomeStyle = {
        backgroundImage: `url(${HomeBackground})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        

      };
    
    return (
        <div  style={HomeStyle}>
            <div className='container'>
            <h1 className='headings'>Home</h1>
            <p className='paragraph'>a YouTube channel that explores complex topics through 
                <br />engaging animations and thought-provoking content. </p>
            </div>
        
        </div>
    )
    


}