import photo from "../../assets/my-photo-2.jpg"
import "./Hero.scss"

export default function Hero(){

    return (
        <section className="Hero">
            <div className="Hero__main">
                <div className="Hero__rectangle"></div>
                <img src={photo} alt="my-photo" className="Hero__img"/>
                <h1 className="Hero__title">SOFTWARE ENGINEER</h1>
            </div>
            <div className="Hero__underline">
                <section className="Hero__leftside">
                    {/* <div className="Hero__forward"> */}
                        {/* <div className="Hero__arrow"></div> */}
                        <div className="Hero__line"></div>
                    {/* </div> */}
                    <div className="Hero__square"></div>
                </section>

            </div>

        </section>
    );
}