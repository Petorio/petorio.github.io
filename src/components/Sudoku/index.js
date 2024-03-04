import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import SudokuP from '../../assets/images/sudoku-analysis.PNG'

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
                    <a target="_blank" rel='noreferrer' href='https://github.com/Petorio/sudoku-solver' className='github-logo'>
                        <FontAwesomeIcon icon={faGithub} color='#fff'/>
                    </a>
                </div>
                <div className='grid-container'>
                    <div className='grid-text'>
                        <p>
                            On the right you can see the results of 100 attempts with each set of heuristics where M = the number of values filled in at the beginning.
                        </p>
                    </div>
                    <div className='grid-image'>
                        <img src={SudokuP} alt="sudoku-img-1" />
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Sudoku