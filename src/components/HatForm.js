import React, { useState } from 'react'
import HatIconsNew from '../styling_codes/HatIconsNew'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import HatIconsNew from '../styling_codes/HatIconsNew';
import HatIcons from '../styling_codes/HatIcons';


const HatForm = () => {

  const [newHat, setNewHat] = useState({
    name: "",
    iconName: "",
  })

  const handleChange = (event) => {
    const propertyName = event.target.name;
        const copyHat = {...newHat}
        copyHat[propertyName] = event.target.value
        setNewHat(copyHat)
  }

console.log(HatIconsNew.mortar_board)

  const submitHandler = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);
    console.log("qq", form_values);
  


  return (
    <div>
      <form onSubmit={submitHandler}>

        <input type="text" placeholder="Hat Name" name="name" onChange={ handleChange }/>

        {/* <select name="hat">
          <option><img src={HatIconsNew.mortar_board}></img></option>
          <option><img src={HatIconsNew.mortar_board}></img></option>
        </select> */}

        <div>
            <input
              type="radio"
              name="radio-image"
              id="radio-form-image1"
              defaultValue={"react"}
            />
            <label htmlFor="radio-form-image1">
              <img
                alt="radio-image-select-1"
                layout="responsive"
                width={"40px"}
                height={"40px"}
                src={mario}
              />
            </label>
          </div>
            <br />
          <div>
            <input
              type="radio"
              name="radio-image"
              id="Radioform-image2"
              defaultValue={"django"}
            />
            <label htmlFor="Radioform-image2">
              <img
                alt="image-select-2"
                width={"30"}
                height={"30"}
                src={"/django.svg"}
              />
            </label>
          </div>
          <br />

        
                
                <button type="submit" >Save</button>
      </form>
    </div>
  )
}
}

export default HatForm
