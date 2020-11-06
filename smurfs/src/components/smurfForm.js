import React from 'react';

const SmurfForm = () => {

  const onChange = (e) => {
    const { name, value, target } = e.target;
    // change(name, value, target)
  }

  return (
    <form>

    <label>
      Name
      <input 
      // value={values.name}
      name="name"
      type="text"
      // onChange={onChange}
      />
    </label>

    <label>
      Age
      <input 
      // value={values.age}
      name="age"
      type="text"
      // onChange={onChange}
      />
    </label>

    <label>
      Height
      <input 
      // value={values.height}
      name="height"
      type="text"
      // onChange={onChange}
      />
    </label>

  </form>

  )
}

export default SmurfForm;