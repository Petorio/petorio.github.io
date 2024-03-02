import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

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
                        activity types and categories were visualized using Vega-Lie, which displayed graphs based on the search parameters.
                    </p>
                </div>
                <div className='grid-container'>
                    <div>
                        <h1>
                            In Progress...
                        </h1>
                    </div>
                </div>
                {/* <div className='grid-container'>
                    <div className='grid-text'>
                        <span>
                            sample text
                        </span>
                    </div>
                    <div className='grid-image'>
                        <img src="" alt="yelpy-img-1" />
                        asdasdasd
                        asdasdasd
                        <br/>
                        asdasdasd
                        asdasdasd
                        <br/>
                        asdasdasd
                        asdasdasd
                        <br/>
                        asdasdasd
                        asdasdasd
                        <br/>
                    </div>
                    <div className='grid-image'>
                        <img src="" alt="yelpy-img-1" />
                    </div>
                    <div className='grid-text'>
                        <span>
                            sample text
                        </span>
                    </div>
                </div> */}
            </div>
            
            <Loader type='pacman' />
        </>
    )
}

export default Runkeeper