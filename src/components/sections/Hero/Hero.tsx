import "./Hero.scss";
import brush from "../../../assets/brush.png";

function Hero(){
    return (
        
        <header>
            <div className="box-header">
                <div className="text-header">
                    <h1 className="text-header heroOrange">MASTER YOUR CREATIVITY</h1>
                    <h4 className="text-header heroBlue">Be one with Your creative side.</h4>
                    <h4 className="text-header heroTitle">Join. Draw. Have Fun. communicate.</h4>
                </div>
                <div className="image-header">

                </div>
                <div className="icon-header">
                    <img src={brush} alt="brush"/>
                </div>
            </div>
        </header>
    );
}

export default Hero;