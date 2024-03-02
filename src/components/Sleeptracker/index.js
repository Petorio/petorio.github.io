import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

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
                </div>
                <div className='grid-container'>
                    <div>
                        <h1>
                            In Progress...
                        </h1>
                    </div>
                </div>
            </div>
            
            <Loader type='pacman' />
        </>
    )
}

export default Sleeptracker