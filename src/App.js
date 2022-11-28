import "./styles.css";
import { useState } from "react";
import LoginForm from "./Components/LoginForm";
export default function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin@123"
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details not matched!!");
      setError("Details not matched!!");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };
  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcomw">
          <h2>
            Welcome, <span>{user.name}</span>
            <br />
            <br />
            <button onClick={Logout}>Logout</button>
          </h2>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
