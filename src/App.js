import './App.css';
import Navbar from './components/Navbar';
import LandingImage from './assets/LANDING PAGE IMAGE.png'
import LandingCover from './assets/landingpagecover.png'
import './components/History'
import History from './components/History';
import Team from './components/Team';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';



function App() {
  
  return (
    <div className="container">
      <Navbar className='navbar3' />
      <LandingPage />
      <div className='navbar2'>
        <Navbar className='navbar2'/>
      </div>
      <History />
      <Team />
      <Footer/>
    </div>
  );
    
    
  
}

export default App;
