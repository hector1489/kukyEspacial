
import MainGallery from "../../components/MainGallery/MainGallery"
import Footer from "../../components/Footer/Footer"
import Description from "../../components/Description/Description"
import NavBar from "../../components/NavBar/NavBar"
import TwiterHeader from "../../components/TwiterHeader/TwiterHeader"
import './Home.css'

const Home = () => {


  return (
    <div className="home-container">
      
      <TwiterHeader />
      <div className="home-nav">
      <NavBar />
      </div>
      <div className="home-description">
      <Description />
      </div>
      <div className="home-mainGallery">
      <MainGallery />
      </div>
     
      <Footer />
    </div>
  )
}

export default Home