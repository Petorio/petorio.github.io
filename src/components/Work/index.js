import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container work-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['M','y',' ','W','o','r','k']} idx={15}/>
                    </h1>
                    <p>
                        On the right are the projects I have done thus far. They include personal, educational, and professional endeavors. 
                        Click on any project to see more.
                    </p>
                </div>
                <div className='grid-container'>
                    <Link to="/yelpy" className='grid-item-link'>
                        <div>
                            <p className='project-info'>
                                I'm Feeling Yelpy
                            </p>
                        </div>
                    </Link>
                    <div className='grid-item'>
                        <p className='date-type'>
                            Feb - Mar 2024<br/>
                            Personal
                        </p>
                    </div>
                    <div className='grid-item'>
                        <p className='date-type'>
                            Oct 2023<br/>
                            Personal
                        </p>
                    </div>
                    <Link to="/wordpress" className='grid-item-link'>
                        <div>
                            <p className='project-info'>
                                AWS WordPress
                            </p>
                        </div>
                    </Link>
                    <Link to="/sleeptracker" className='grid-item-link'>
                        <div>
                            <p className='project-info'>
                                SleepTracker
                            </p>
                        </div>
                    </Link>
                    <div className='grid-item'>
                        <p className='date-type'>
                            Feb 2023<br/>
                            Educational
                        </p>
                    </div>
                    <div className='grid-item'>
                        <p className='date-type'>
                            Jan 2023<br/>
                            Educational
                        </p>
                    </div>
                    <Link to="/runkeeper" className='grid-item-link'>
                        <div>
                            <p className='project-info'>
                                Runkeeper Tweet Report
                            </p>
                        </div>
                    </Link>
                    <Link to="/sudoku" className='grid-item-link'>
                        <div>
                            <p className='project-info'>
                                AI Sudoku Solver
                            </p>
                        </div>
                    </Link>
                    <div className='grid-item'>
                        <p className='date-type'>
                            Dec 2022<br/>
                            Educational
                        </p>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Work