import {  FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers, getUsers, userSelector } from "./userSlice";
function UserPage() {
  const [newUserName, setNewUserName] = useState<string>("");
  const [newUserEmail, setNewUserEmail] = useState<string>("");
  const [newCategory, setNewCategory] = useState<string>("");
  const dispatch = useAppDispatch();

  const { loading, users, error } = useAppSelector(userSelector);
  useEffect(() => {
  dispatch(getUsers());
  }, [dispatch]);
  console.log('users', users)

  function handleAddUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newUser = {
      name: newUserName,
      price: newUserEmail,
      category: newCategory,
    };
    console.log('newUser', newUser)
    dispatch(fetchUsers(newUser));
  }
  return (
    <div>
      <div>
        <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Name"
          aria-label="name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Email"
          aria-label="email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
        ></input>
         <input
          type="text"
          placeholder="Email"
          aria-label="email"
          value={newUserEmail}
          onChange={(e) => setNewCategory(e.target.value)}
        ></input>
        <button type="submit" className="btn" >
          Add
        </button>
        </form>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {users?.map((user,index) => (
        <li key={index + 1}>
          | {user.name} | {user.price} {user.category}
        </li>
      ))}
    </div>
  );
}
export default UserPage;