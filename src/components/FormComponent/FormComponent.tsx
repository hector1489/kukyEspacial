

const FormComponent = () => {

  return (
    <form className="m-2 w-2/4">
      <label className="input input-bordered flex items-center gap-2 mt-2">
        Name <span className="text-success font-bold"> :</span>
        <input type="text" className="grow" placeholder="your Name" />
      </label>
      <label className="input input-bordered flex items-center gap-2 mt-2">
        Email <span className="text-success font-bold"> :</span>
        <input type="text" className="grow" placeholder="XXXXX@site.com" />
      </label>
      <textarea className="textarea textarea-secondary mt-2" placeholder="your comment"></textarea>

    </form>
  )
}


export default FormComponent
