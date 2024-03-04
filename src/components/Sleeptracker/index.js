import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import SleepP1 from '../../assets/images/sleeptracker-1.PNG'

const Sleeptracker = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container sleep-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['S','l','e','e','p','t','r','a','c','k','e','r']} idx={15}/>
                    </h1>
                    <p>
                        Sleeptracker is an Ionic mobile application that helps track sleep. You can log sleep duration, bed and wake-up times, and record 
                        day-time sleepiness based on the Standford Sleepiness Scale.
                    </p>
                    <p>
                        There is a small handful of data that needed to be stored in a database, so I integrated Google Firebase for a quick-and-easy backend 
                        that allows users to analyze their long-term sleep patterns. Users also have the ability to opt-in to reminders to log their sleep.
                    </p>
                    <a target="_blank" rel='noreferrer' href='https://github.com/Petorio/Sleeptracker' className='github-logo'>
                        <FontAwesomeIcon icon={faGithub} color='#fff'/>
                    </a>
                </div>
                <div className='grid-container'>
                    <div className='grid-text'>
                        <p>
                            On the right you can see the screen to log your sleepiness from Month, Day, Year, and Time.
                        </p>
                    </div>
                    <div className='grid-image'>
                        <img src={SleepP1} alt="sleeptracker-img-1" />
                    </div>
                </div>
            </div>
            
            <Loader type='pacman' />
        </>
    )
}

export default Sleeptracker