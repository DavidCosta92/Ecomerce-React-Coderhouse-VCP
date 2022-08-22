import SlideProductImg from "../components/SlideProductImg/SlideProductImg";
import Form from "../components/Form/Form";
import "./css/AboutUs.css" 

const AboutUs =()=>{
    return (
        <div>
            <p className="tituloAbout">Escribenos!</p>
            <div>
                <Form/>
            </div>
            <div className="sliderAbout">
                <SlideProductImg a="./slider/1.jpg" b="./slider/2.png" c="./slider/3.png" d="./slider/4.jpg"  textoAlt="Locales de van como piña"/>
            </div>
                             
        </div>
    )
}
export default AboutUs;