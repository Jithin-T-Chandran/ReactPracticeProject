import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredCollege, setEnteredCollege] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollege.trim().length === 0) {
        setError({
            title:"Invalid input",
            message:"Please enter a valid name, age (non-empty values) and college name."
        });
        return;
    }
    if (+enteredAge < 1) {
        setError({
            title:"Invalid age",
            message:"Please enter a valid age (> 0)."
        });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge,enteredCollege);
    setEnteredUserName("");
    setEnteredAge("");
    setEnteredCollege("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const collegenameChangeHandler = (event) => {
    setEnteredCollege(event.target.value);
  };
  const errorHandler = () =>{
    setError(null);
  }

  return (
    <React.Fragment>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User name</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <label htmlFor="collegename">College name</label>
          <input
            id="collegename"
            type="text"
            value={enteredCollege}
            onChange={collegenameChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
}

export default AddUser;
