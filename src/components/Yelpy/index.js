import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

const Yelpy = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container yelpy-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['I',"'",'m',' ','F','e','e','l','i','n','g',' ','Y','e','l','p','y']} idx={15}/>
                    </h1>
                    <p>
                        During the development of a Django web application, I implemented an innovative "I'm Feeling Lucky" feature for restaurant discovery. 
                        This feature allowed users to input specific query parameters such as location, cuisine, rating, and price, and receive a randomized list of 
                        matching restaurants, enhancing the exploration experience.
                    </p>
                    <p>
                        To achieve this, I integrated the YelpFusion API, which enabled efficient querying and retrieval of restaurant data. 
                        By leveraging this API, I delivered personalized and accurate restaurant recommendations, significantly enhancing the overall 
                        user experience and satisfaction with the application.
                    </p>
                    <a target="_blank" rel='noreferrer' href='https://github.com/Petorio/I-m-Feeling-Yelpy' className='github-logo'>
                        <FontAwesomeIcon icon={faGithub} color='#fff'/>
                    </a>
                </div>
                <div className='grid-container'>
                    <div className='grid-text'>
                        <p>
                            The project is currently in development. This page will be updated with more information when it is complete...
                        </p>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Yelpy