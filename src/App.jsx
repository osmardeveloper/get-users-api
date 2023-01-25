import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Async y await con fetch
  // const getRandomUser = async () => {
  //   const response = await fetch("https://randomuser.me/api/");
  //   const data = await response.json()
  //   console.log(data)
  // }

  // const getRandomUser = () => {
  //   fetch("https://randomuser.me/api/")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err))
  // }

  const [user, setUser] = useState();

  const getRandomUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res.data.results[0]))
      // .then(res => console.log(res.data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  const change = () => {
    getRandomUser();
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: user ? user.gender === "male" ? "#b1c3f3e1" : "#f0a0f3e1" : "#ffffff"
      }}
    >
      <div className="target">
        {user ? (
          <img src={user.picture.large} alt="img profile" />
        ) : (
          <h1>Cargando... </h1>
        )}
        {user ? (
          <ul>
            <li>
              <h1>{user.name.title}</h1>
            </li>
            <li>
              <h1>
                {user.name.first} {user.name.last}
              </h1>
            </li>
            <li>Age: {user.dob.age} </li>
            <li>Phone: {user.phone} </li>
            <li>
              <p>{user.email}</p>{" "}
            </li>
            <li>City: {user.location.city} </li>
          </ul>
        ) : (
          <h1>Cargando... </h1>
        )}
        <button onClick={change}> next </button>
      </div>
    </div>
  );
}

export default App;
