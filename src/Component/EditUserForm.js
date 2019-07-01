import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [props]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label className="label3"><b>Name</b></label><br></br>
      <input className="ip3" type="text" name="name" value={user.name} onChange={handleInputChange} /><br></br>
      <label className="label4"><b>Username</b></label><br></br>
      <input className="ip4" type="text" name="username" value={user.username} onChange={handleInputChange} /><br></br>
      <button className="btn4">Update user</button>
      <button onClick={() => props.setEditing(false)} className="btn5">Cancel</button>
    </form>
  )
}

export default EditUserForm;