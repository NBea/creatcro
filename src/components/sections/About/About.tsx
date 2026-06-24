import "./About.scss";
import easelIcon from "../../../assets/easel-icon.png";


function About(){
    return (

        <div className="box-about">
            <h1 className="aboutTitle">What to do here?</h1>
            <div className="aboutBox">
                <img src={easelIcon} alt="brush"/>
                <p>Want to post your photographs? <span className="blue">Post them.</span></p>
            </div>
            <div className="aboutBox">
                <img src={easelIcon} alt="brush"/>
                <p>Do you want to sketch a little something or take a whole chunk of your life on this master piece? <span className="blue">Either one if perfect! </span></p> 
            </div>
            <div className="aboutBox">
                <img src={easelIcon} alt="brush"/>
                <p>Want to draw something but don’t have an idea? <span className="blue">We got you!</span></p>
            </div>
            <div className="aboutBox">
                <img src={easelIcon} alt="brush"/>
                <p>Take a look at some of our community photography and <span className="blue">draw just what you see!</span></p>
            </div>
            <div className="aboutBox">
                <img src={easelIcon} alt="brush"/>
                <p>
                    <span className="blue">Share </span>
                    with us what you created and surprise the photographer with you idea of their piece and take a look what others have came up with.  
                </p>
            </div>
            <div className="aboutBox">
                <img src={easelIcon} alt="brush"/>
                <p>Just want to browse?
                    <span className="blue"> Got it! </span>
                    Take a look at the masterpieces artists created.
                </p>
            </div>
        </div>
    );
}

export default About;