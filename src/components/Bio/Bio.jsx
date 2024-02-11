import Photo from '../../assets/my-photo-1.jpg'
import './Bio.scss'

export default function Bio(){
    return (
        <section className="Bio">
            <div className='Bio__head'>
                <h2 className="Bio__title">Hello,<br/>I’m Farshid Gharagozloo</h2>
                <div className="Bio__line"></div>
            </div>
            <div className="Bio__main">
                <img src={Photo} alt="my-photo" className='Bio__image'/>
                <div className="Bio__intro">
                    <h3 className='Bio__about'>About me:</h3>
                    <p className='Bio__text'>Foreign educated Software Engineer with a Master Degree in Physics and Software Engineering Diploma in Canada,
                        skilled on software development life-cycle,  intensive knowledge in front-end/ back-end development and web technologies and good
                        understanding of software engineering. Proficient in programming language, experienced working on a variety of software, creative, 
                        goal oriented and able to work in a fast-paced environment. Quick learner and adaptable to changing environment, ready to learn new things, 
                        techniques and technologies. Fluent in English and Farsi. </p>
                </div>
            </div>
        </section>
    );
}