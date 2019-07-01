import React, { useState, Fragment } from 'react';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import UserTable from './Table';
import './Home.css';

const Home1 = () => {
  const usersData = []
  const initialFormState = { id: null, name: '', username: '' }
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  return (
    <div className="container">
      <div class="row">
        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm">
          <h2 className="heading1"><b>React Application</b></h2>
        </div>
        <div id="div2" class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm">
          <a className="heading2" href="Login"><b>Logout</b></a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm">
          {editing ? (
            <Fragment>
              <h3 className="heading3"><b>Edit user</b></h3>
              <EditUserForm editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
            </Fragment>
          ) : (
              <Fragment>
                <h3 className="heading4"><b>Add user</b></h3>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
        </div>
        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm">
          <h3 className="heading5"><b>View users</b></h3>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default Home1;