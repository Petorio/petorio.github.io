import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import RunP from '../../assets/images/runkeeper-1.PNG'

const Runkeeper = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container run-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['R','u','n','k','e','e','p','e','r',' ','T','w','e','e','t',' ','R','e','p','o','r','t']} idx={13}/>
                    </h1>
                    <p>
                        I analyzed and summarized tweets made by Runkeeper - a GPS fitness-tracking application for iOS and Androids - using base JavaScript and TypeScript. 
                        These tweets were then categorized and extracted for important information.
                    </p>
                    <p>
                        This was done through Twitter API to generate a dynamic webpage report. I leveraged jQuery to update the HTML spans with statistical 
                        insights on the tweet's different categories and user-generated content presence.
                    </p>
                    <p>
                        After gaining this data, I created an interactive search interface for quick access to explore Runkeeper activities. Once a search was complete, 
                        activity types and categories were visualized using Vega-Lite, which displayed graphs based on the search parameters.
                    </p>
                    <a target="_blank" rel='noreferrer' href='https://github.com/Petorio/Runkeeper' className='github-logo'>
                        <FontAwesomeIcon icon={faGithub} color='#fff'/>
                    </a>
                </div>
                <div className='grid-container'>
                    <div className='grid-text'>
                        <p>
                            On the right you can see a graph displaying 16 different ypes of activities people logged with Runkeeper.
                        </p>
                    </div>
                    <div className='grid-image'>
                        <img src={RunP} alt="runkeeper-img-1" />
                    </div>
                </div>
            </div>
            
            <Loader type='pacman' />
        </>
    )
}

export default Runkeeper