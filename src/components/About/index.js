import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import { faAngular, faAws, faCss3, faGitAlt, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','M','e']} idx={15}/>
                    </h1>
                    <p>
                        I'm a passionate, curious, and results-driven Software Engineer eagerly looking to start my career in Full Stack/Back-End development.
                    </p>
                    <p>
                        Graduating recently with a B.S in Computer Science from the University of California - Irvine, I have a solid academic background complemented by 
                        hands-on software development experience in the startup environment.
                    </p>
                    <p>
                        I hope to see myself joining an established company to bring innovative and scalable solutions all while tackling complex challenges through clean, efficient,
                        and maintainable code.
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAws} color="#5ED4F4" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faPython} color="#EFD81D" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#222222" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About