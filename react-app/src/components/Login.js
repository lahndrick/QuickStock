import React, { useState } from "react";
import axios from 'axios';

function setCookie(name, value, days) {
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
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

		const params = new URLSearchParams();
		params.append('username', username);
		params.append('password', password);

		axios.post("http://3.26.71.160/index.php/auth/authLogin", params, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then(res => {
				const { status, data } = res.data;

				if (status === 'success') {
					// Save the token in cookies
					setCookie('userToken', data, 1);
					console.log("Token saved in cookies:", data);
					window.location.reload()

				} else {
					console.log("Login failed:", data);
				}
			})
			.catch(error => {
				console.error(error);
			});
	};

	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "50vh" }}>
			<section style={{ width: "50%", textAlign: "center" }}>
				<h2 style={{ marginLeft: "70px" }}>Login</h2>
				<form onSubmit={handleLogin}>
					<label>
						Username:
						<input
							type="text"
							name="username"
							value={username}
							onChange={handleInputChange}
							required
							style={{ width: "20%", padding: "5px", marginBottom: "10px", marginLeft: "10px" }}
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
							pattern=".{1,}"
							title="Password cannot be empty"
							style={{ width: "20%", padding: "5px", marginBottom: "10px", marginLeft: "13px" }}
						/>
					</label>
					<br />
					<button type="submit" style={{ backgroundColor: "#007BFF", color: "white", padding: "10px", borderRadius: "30px", marginLeft: "70px" }}>
						Login
					</button>
				</form>
			</section>
		</div>
	);
}

export default Login;
