import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Sudoku = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container sudoku-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A','I',' ','S','u','d','o','k','u',' ','S','o','l','v','e','r']} idx={15}/>
                    </h1>
                    <p>
                        This was a project for my Intro to AI class. I developed the solver by integrating different heuristics such as 
                        Forward Checking, Minimum Remaining Value, Least Constraining Value, and Norvig's Check.
                    </p>
                    <p>
                        After the initial development of the solver, I implemented tailored list pruning methods as the Sudoku game board was a 2D list/array.
                        Through multiple trials, I boosted my solver's efficiency and runtime optimization by up to 38%.
                    </p>
                    <p>
                        Lastly, I altered the different algorithms to be able to solve not just 9x9 Sudoku boards but NxM boards. These varying grid sizes 
                        tended to take more time to solve; however, I was able to validate the problem-solving capacity of my solver.
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

export default Sudoku