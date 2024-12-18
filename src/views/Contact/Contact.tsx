import FormComponent from "../../components/FormComponent/FormComponent"
import './Contact.css'


const Contact = () => {

  return (
    <div className="contact-view-container text-center">

      <div className="contact-form-container">
        <h3 className="bg-base-300">Contacto <span className="text-success font-bold">:</span></h3>
        <FormComponent />
      </div>
      <div className="contact-view-buttons">
        <a href="https://www.facebook.com/people/rashtistore/61569902727603/?rdid=H0OoVXKosw9i9wfQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F186uE631Hj%2F" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://www.instagram.com/rashtistore/profilecard/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://wa.me/54270328" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>


    </div>
  )
}

export default Contact

