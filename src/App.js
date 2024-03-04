import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Yelpy from './components/Yelpy';
import Wordpress from './components/Wordpress';
import Sleeptracker from './components/Sleeptracker';
import Runkeeper from './components/Runkeeper';
import Sudoku from './components/Sudoku';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="react-portfolio" element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='work' element={<Work />} />
          <Route path='contact' element={<Contact />} />
          <Route path='yelpy' element={<Yelpy />} />
          <Route path='wordpress' element={<Wordpress />} />
          <Route path='sleeptracker' element={<Sleeptracker />} />
          <Route path='runkeeper' element={<Runkeeper />} />
          <Route path='sudoku' element={<Sudoku />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
