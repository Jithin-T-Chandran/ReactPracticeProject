import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const[userList,setUserList] = useState([]);

  const addUserHandler = (uName,uAge) =>{
    setUserList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,age:uAge,id:Math.random.toString()}]
    });
  }

  return (
    <React.Fragment>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={userList}/>
    </React.Fragment>
  );
}

export default App;
