import Navbar from '../Navbar/Navbar'
import HomeInfo from './HomeInfo'
import HomePhotoShoot from './HomePhotoShoot'

import './Home.css'

const Home = () => {
    return(
        <div className='main-container'>
            <Navbar />
            <div className='Home-container'>
            <HomeInfo />
            <HomePhotoShoot />
            </div>
        </div>     
    )
}
export default Home