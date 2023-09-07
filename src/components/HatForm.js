import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './HatForm.css'


const HatForm = ({user, onCreate}) => {

  const [newHat, setNewHat] = useState({
    name: "",
    iconName: "hat1",
    user: user
  })

  const handleChange = (event) => {
    const propertyName = event.target.name;
        const copyHat = {...newHat}
        copyHat[propertyName] = event.target.value
        setNewHat(copyHat)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(newHat);
  };

  return (
    <div >
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='form-input-container'>
        <input type="text" placeholder="Hat Name" name="name" onChange={ handleChange }/>
        
        <div>
        <p>Pick your hat icon:</p>
        <img src={require(`../assets/images/hat1.png`)} className="hat-image" alt="hat"/>
        <input type="radio" name="iconName" value="hat1" onChange={handleChange}/>
        </div>

        <div>
        <img src={require(`../assets/images/hat2.png`)} className="hat-image" alt="hat"/>
        <input type="radio" name="iconName" value="hat2" onChange={handleChange}/>
        </div>

        <div>
        <img src={require(`../assets/images/hat3.png`)} className="hat-image" alt="hat"/>
        <input type="radio" name="iconName" value="hat3" onChange={handleChange}/>
        </div>

        <div>
        <img src={require(`../assets/images/hat4.png`)} className="hat-image" alt="hat"/>
        <input type="radio" name="iconName" value="hat4" onChange={handleChange}/>
        </div>
        
        
                <button type="submit" >Save</button>
                </div>
      </form>
    </div>
  )
}

export default HatForm
