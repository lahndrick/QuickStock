import React, { useState } from "react";
import axios from 'axios';
import quickstockLogo from "../icon.png";

function setCookie(name, value, days) {
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	document.title = "QuickStock - Login";

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
					window.location.reload();
				} else {
					console.log("Login failed:", data);
					alert("Username or password incorrect");
				}
			})
			.catch(error => {
				console.error(error);
			});
	};

	return (
		<div className="login-page">
			<section className="login-section custom-login-section w-4/5 max-w-[400px] mx-auto my-[15%] mb-[20px] p-[20px] box-border">
				<div className="flex h-[80px]">
					<img src={quickstockLogo} alt="QuickStock Logo" className="w-16 h-fit brightness-[0%] self-center"/>
					<h2 className="text-3xl font-medium pl-2 h-fit self-center">QuickStock Login</h2>
				</div>
				<form onSubmit={handleLogin}>
					<label>
						Username:
						<input
							type="text"
							name="username"
							value={username}
							onChange={handleInputChange}
							required
							className="login-input w-full p-[10px] mb-[10px] box-border"
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
							className="login-input w-full p-[10px] mb-[10px] box-border"
						/>
					</label>
					<br />
					<button
						type="submit"
						className="login-button w-full bg-[#34495e] text-[#fff] p-[15px] cursor-pointer rounded-[5px] border-none outline-none transition-colors"
					>
						Login
					</button>
				</form>


			</section>

		</div>
	);
}

export default Login;
