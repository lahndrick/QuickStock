import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'; // Update import
import './App.css';
import InventoryComponent from './components/Inventory';
import AccountsComponent from './components/Accounts';
import DashboardComponent from './components/Dashboard';
import LoginComponent from './components/Login';

function setCookie(name, value, days) {
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
	const cookieValue = document.cookie
		.split('; ')
		.find(cookie => cookie.startsWith(`${name}=`));

	if (cookieValue) {
		return cookieValue.split('=')[1];
	}

	return null;
}

const authenticate = async (userToken) => {
	const url = 'http://3.26.71.160/index.php/auth/checkToken';

	try {
		const formData = new FormData();
		formData.append('userToken', userToken);

		const response = await fetch(url, {
			method: 'POST',
			body: formData,
		});

		const result = await response.json();

		if (!response.ok) {
			console.error('Authentication request failed. Server response:', result);
		}

		console.log('Response Data:', result);

		// Check for the value in the response and return the opposite
		return result.value === true;
	} catch (error) {
		console.error('Error during authentication request:', error);
		return false;
	}
};

function App() {

	const userToken = getCookie('userToken');
	console.log(userToken);
	// Use state to store the authentication status
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Use useEffect to authenticate when the component mounts
	useEffect(() => {
		const authenticateUser = async () => {
			const isAuthenticated = await authenticate(userToken);
			setIsAuthenticated(isAuthenticated);
		};

		authenticateUser();
	}, [userToken]);

	// Use this function to handle logout
	const handleLogout = () => {
		// Clear the token from cookies
		document.cookie = 'userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

		// Update the authentication status
		setIsAuthenticated(false);

		// Redirect to the login page

	};

	return (
		<Router>
			<div className="app">

				<div className="app-container">
					{isAuthenticated ? (
						<>
							<nav className="app-sidebar">
								<div className="sidebar-header">
									<h1>QuickStock</h1>
								</div>
								<ul>
									<li>
										<Link to="/dashboard">Dashboard</Link>
									</li>
									<li>
										<Link to="/inventory">Inventory</Link>
									</li>
									<li>
										<Link to="/accounts">Accounts</Link>
									</li>
									<li style={{ marginBottom: "5px" }}>
										<button
											onClick={handleLogout}
											style={{
												backgroundColor: "#2c3e50",
												fontSize: "16px",
												color: "#ecf0f1",
												padding: "15px",
												width: "100%",
												border: "none",
												borderRadius: "5px", // Ensure border radius is set
												cursor: "pointer",
												transition: "background-color 0.3s",
												outline: "none", // Remove default outline
											}}
										>
											Logout
										</button>
									</li>
								</ul>
							</nav>

							<main className="app-main">
								<Routes>
									<Route path="/dashboard" element={<DashboardComponent/>}/>
									<Route path="/inventory" element={<InventoryComponent/>}/>
									<Route path="/accounts" element={<AccountsComponent/>}/>
								</Routes>
							</main>
						</>
					) : (
						<main className="app-main">
							<Routes>
								<Route path="/login" element={<LoginComponent/>}/>
							</Routes>
						</main>
					)}
				</div>


				<footer className="app-footer">
					<p>&copy; 2023 QuickStock</p>
				</footer>
			</div>
		</Router>
	);
}

export default App;
