

const FormComponent = () => {

  return (
    <>
      <label className="input input-bordered flex items-center gap-2">
        Name
        <input type="text" className="grow" placeholder="Daisy" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Email
        <input type="text" className="grow" placeholder="daisy@site.com" />
      </label>
      <textarea className="textarea textarea-secondary" placeholder="Bio"></textarea>

    </>
  )
}


export default FormComponent
