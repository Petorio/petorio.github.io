import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Wordpress = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container wordpress-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A',"W",'S',' ','W','o','r','d','P','r','e','s','s']} idx={15}/>
                    </h1>
                    <p>
                        I have been recently delving into the world of AWS and trying to become familiar with the services that Amazon provides. For this project,
                        I setup the essential components such as VPC, Nat Gateways, and Security Groups. The AWS Network was three-tiers with six subnets, two public and 
                        two private.
                    </p>
                    <p>
                        I established a scalable and secure architecture by integrating Amazon RDS for database management, Elastic File System for shared storage, 
                        and an Application Load Balancer for efficient resource allocation. To enhance reliability, high availability was implemented through 
                        Auto Scaling. The domain was registered via Route 53 with SSL certificate management, making sure that the website was securely connected 
                        to the internet.
                    </p>
                    <p>
                        I had to take it down from AWS as the implementation was too costly. My goal is to learn more about AWS and see what I can do 
                        to deploy this without much cost.
                    </p>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Wordpress