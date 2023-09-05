import React, {useState} from 'react'
import { useParams } from 'react-router-dom';


const UpdateHatForm = ({hat}) => {


const [newHat, setNewHat] = useState({
    name: hat.name,
    iconName: hat.iconName
  })

  
console.log(hat)

  const handleChange = (event) => {
    const propertyName = event.target.name;
        const copyHat = {...newHat}
        copyHat[propertyName] = event.target.value
        setNewHat(copyHat)
  }

  return (
    <div>
      <p>Edit Hat</p>
      <form>
        <input type="text" placeholder="Hat Name" name="name" onChange={ handleChange }/>
        <select>
          {/* <option><img src={HatIconsNew.mortar_board}></img></option> */}
          {/* <option><img src={HatIconsNew.mortar_board}></img></option> */}
        </select>
                
                <button type="submit" >Save</button>
      </form>
    </div>
  )
}

export default UpdateHatForm