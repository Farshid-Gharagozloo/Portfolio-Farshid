import adaptability from "../../assets/Adaptability.jpg"
import teamwork from "../../assets/Teamwork.jpg"
import problem_solving from "../../assets/Problem-solving.jpg"
import time_management from "../../assets/Time-Management.jpg"
import coding from "../../assets/Coding.jpg"
import creativity from "../../assets/Creativity.jpg"

import './PersonalSkills.scss'


export default function PersonalSkills(){
    return(
        <section className="personal">
            <div className="personal__head">
                <h2 className="personal__title">Personal Skills</h2>
                <div className="personal__rectangle"></div>
            </div>
            <section className="personal__main">
                <div className="personal__skillset">
                    <h4 className="personal__skill">Adaptability</h4>
                    <div className="personal__skilldetails">
                        <img src={adaptability} alt="adaptability image" className="personal__skillimg" />
                        <p className="personal__skilltext">A software engineer with a proven ability to 
                            adapt to evolving technologies and methodologies, ensuring seamless integration 
                            into dynamic project environments.</p>
                    </div>
                </div>

                <div className="personal__skillset">
                    <h4 className="personal__skill">Teamwork</h4>
                    <div className="personal__skilldetails">
                        <img src={teamwork} alt="adaptability image" className="personal__skillimg" />
                        <p className="personal__skilltext">Collaborative and communicative, I excel in 
                            teamwork, fostering a positive and productive atmosphere to achieve shared 
                            goals with fellow developers and stakeholders.</p>
                    </div>
                </div>

                <div className="personal__skillset">
                    <h4 className="personal__skill">Problem-solving</h4>
                    <div className="personal__skilldetails">
                        <img src={problem_solving} alt="adaptability image" className="personal__skillimg" />
                        <p className="personal__skilltext">With a strategic and analytical approach, I 
                            adeptly tackle complex coding challenges, consistently finding efficient and 
                            effective solutions to optimize software performance.</p>
                    </div>
                </div>

                <div className="personal__skillset">
                    <h4 className="personal__skill">Time Management</h4>
                    <div className="personal__skilldetails">
                        <img src={time_management} alt="adaptability image" className="personal__skillimg" />
                        <p className="personal__skilltext">Adept at prioritizing tasks and meeting deadlines, 
                            I ensure timely delivery of high-quality software products by employing effective 
                            time management strategies throughout the development lifecycle.</p>
                    </div>
                </div>

                <div className="personal__skillset">
                    <h4 className="personal__skill">Coding</h4>
                    <div className="personal__skilldetails">
                        <img src={coding} alt="adaptability image" className="personal__skillimg" />
                        <p className="personal__skilltext">Proficient in multiple programming languages, 
                            I demonstrate a mastery of coding principles, employing clean and scalable 
                            code to develop robust and innovative software applications.</p>
                    </div>
                </div>

                <div className="personal__skillset">
                    <h4 className="personal__skill">Creativity</h4>
                    <div className="personal__skilldetails">
                        <img src={creativity} alt="adaptability image" className="personal__skillimg" />
                        <p className="personal__skilltext">Infusing creativity into my work, I bring a fresh 
                            perspective to problem-solving, generating inventive solutions and pushing the 
                            boundaries of conventional software development.</p>
                    </div>
                </div>


            </section>
        </section>
    );
}