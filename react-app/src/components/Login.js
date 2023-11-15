import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [DbUsername, getDbUsername] = useState("");
    const [DbPassword, getDbPassword] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !password) {
            console.log("Please enter both username and password.");
            return;
        }

        // This will not work currently; it needs to be able to check the database
        if (username === DbUsername && password === DbPassword) {
            console.log("Login works");
        } else {
            console.log("Login does not work");
        }
    };

    return (
        <div>
            <section className="login-section">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            required
                            pattern=".{1,}" // Pattern to ensure at least one character
                            title="Password cannot be empty"
                        />
                    </label>
                    <br />
                    <button type="submit">
                        Login
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Login;
