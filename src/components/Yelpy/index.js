import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

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
                        I'm Feeling Yelpy - Yelpy for short - is a web application using Django and deployed on AWS through Elastic Beanstalk.
                        Yelpy calls the Yelp Fusion API to get real-time restaurant data and information based off of user's parameters.
                    </p>
                    <p>
                        Yelpy runs through AWS' EC2 with their default VPC on two subnets. At first I leveraged their RDS service as well; however,
                        I realized that this application does not need a database for now.
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

export default Yelpy