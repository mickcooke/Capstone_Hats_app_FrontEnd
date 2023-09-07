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

  const onDelete = () => {
    handleDelete(hat.id);
  };



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
          <div className="button"><button type="submit">Save</button></div>
        </form>
      </div>
    </>
  );
};

export default UpdateHatForm;
