
import MainGallery from "../../components/MainGallery/MainGallery"
import Footer from "../../components/Footer/Footer"
import Description from "../../components/Description/Description"
import NavBar from "../../components/NavBar/NavBar"
import TwiterHeader from "../../components/TwiterHeader/TwiterHeader"

const Home = () => {


  return (
    <div className="home-container">

      <TwiterHeader />
      <NavBar />
      <Description />
      <MainGallery />
      <Footer />
    </div>
  )
}

export default Home