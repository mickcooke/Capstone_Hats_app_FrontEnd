import React, { useState } from 'react'
import HatIconsNew from '../styling_codes/HatIconsNew'


const HatForm = () => {

  const [newHat, setNewHat] = useState({
    name: "",
  })

  const handleChange = (event) => {
    const propertyName = event.target.name;
        const copyHat = {...newHat}
        copyHat[propertyName] = event.target.value
        setNewHat(copyHat)
  }

console.log(HatIconsNew.mortar_board)


  return (
    <div>
      <form>
        <input type="text" placeholder="Hat Name" name="name" onChange={ handleChange }/>
        <select>
          <option><img src={HatIconsNew.mortar_board}></img></option>
          <option><img src={HatIconsNew.mortar_board}></img></option>
        </select>
                
                <button type="submit" >Save</button>
      </form>
    </div>
  )
}

export default HatForm
