import React, { useState } from "react";
import './HatUpdateForm.css'


const UpdateHatForm = ({ hat, handleDelete, user, onUpdate }) => {
  const [updatedHat, setUpdatedHat] = useState({
    name: hat.name,
    iconName: hat.iconName,
    user: user,
    id: hat.id
  });

  let hatId = hat.id
 

  const handleChange = (event) => {
    const propertyName = event.target.name;
    const copyHat = { ...updatedHat };
    copyHat[propertyName] = event.target.value;
    setUpdatedHat(copyHat);
  };

  // const onDelete = () => {
  //   handleDelete(hat.id);
  // };



  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(updatedHat, hatId);
    
  }

  return (
    <>
      <div>
        <p>Edit Hat</p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            defaultValue={hat.name}
            placeholder="Hat Name"
            name="name"
            onChange={handleChange}
          />

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

          <div className="button"><button type="submit">Save</button></div>
        </form>
      </div>
    </>
  );
};

export default UpdateHatForm;
