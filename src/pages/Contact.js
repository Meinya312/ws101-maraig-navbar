import ContactBackground from './contact.png';
import "./pages.css"
export default function Pricing(){
    const ContactStyle = {
        backgroundImage: `url(${ContactBackground})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        

      };

    return (
        <div  style={ContactStyle}>
            <div className='container'>
                
            <h1 className='headings'>contact</h1>
            <p className='paragraph'>For more information about Kurzgesagt or to connect with us, please reach out through our <br />contact page—we’d love to hear your thoughts!</p>
            </div>
        
        </div>
    )
}