import FormComponent from "../../components/FormComponent/FormComponent"
import './Contact.css'


const Contact = () => {

  return (
    <div className="contact-view-container text-center">

      <div className="contact-form-container">
        <h3 className="bg-base-300">Contacto <span className="text-success font-bold">:</span></h3>
          <FormComponent />
      </div>

    </div>
  )
}

export default Contact

