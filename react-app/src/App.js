import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './App.css';
import InventoryComponent from './components/Inventory';
import AccountsComponent from './components/Accounts';
import DashboardComponent from './components/Dashboard';
import LoginComponent from './components/Login';
import AddItemComponent from './components/Add_item';

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
	const [authenticationChecked, setAuthenticationChecked] = useState(false);

	// Use useEffect to authenticate when the component mounts
	useEffect(() => {
		const authenticateUser = async () => {
			// Check if userToken is defined before making the authentication request
			if (userToken) {
				const isAuthenticated = await authenticate(userToken);
				setIsAuthenticated(isAuthenticated);
			}
			setAuthenticationChecked(true);
		};

		authenticateUser();
	}, [userToken]);

	// Use this function to handle logout
	const handleLogout = () => {
		document.cookie = 'userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
		// Update the authentication status
		setIsAuthenticated(false);
	};

	// Show a loading indicator or a different component while authentication is being checked
	if (!authenticationChecked) {
		return <div>Loading...</div>;
	}

	// Temporarily render LoginComponent outside of Routes for testing
	if (!isAuthenticated) {
		return (
			<div className="login-page">

				<LoginComponent />


			</div>
		);
	}

	return (
		<Router>
			<div className="app flex flex-col flex-1 min-h-full m-0 p-0 font-arial text-[#333]">
				<div className="app-container flex flex-1">
					{!userToken ? null : (
						<nav className="app-sidebar w-[250px] bg-secondary text-off-white p-[20px] shadow-md flex flex-col items-center">
							<div className="sidebar-header text-center mb-[20px]">
								<h1>QuickStock</h1>
							</div>
							<ul className="list-none p-0 w-full">
								<li className="hover:bg-[#34495e] p-[15px] text-center cursor-pointer transition-colors radius-[5px] mb-[5px]">
									<NavLink to="/add_item" className="p-[15px] text-center cursor-pointer transition-colors block text-off-white">Add item</NavLink>
								</li>
								<li className="hover:bg-[#34495e] p-[15px] text-center cursor-pointer transition-colors radius-[5px] mb-[5px]">
									<NavLink to="/dashboard" className="p-[15px] text-center cursor-pointer transition-colors block text-off-white">Dashboard</NavLink>
								</li>
								<li className="hover:bg-[#34495e] p-[15px] text-center cursor-pointer transition-colors radius-[5px] mb-[5px]">
									<NavLink to="/inventory" className="p-[15px] text-center cursor-pointer transition-colors block text-off-white">Inventory</NavLink>
								</li>
								<li className="hover:bg-[#34495e] p-[15px] text-center cursor-pointer transition-colors radius-[5px] mb-[5px]">
									<NavLink to="/accounts" className="p-[15px] text-center cursor-pointer transition-colors block text-off-white">Accounts</NavLink>
								</li>
								<li className="hover:bg-[#34495e] p-[15px] text-center cursor-pointer transition-colors radius-[5px] mb-[5px]">
									<button onClick={handleLogout}>
										Logout
									</button>
								</li>
							</ul>
						</nav>
					)}

					<main className="app-main flex flex-col flex-1 p-[20px] min-h-screen bg-off-white">
						<Routes>
							{!isAuthenticated ? (
								<Route path="/login" element={<LoginComponent />} />
							) : (
								<>
									<Route path="/dashboard" element={<DashboardComponent />} />
									<Route path="/inventory" element={<InventoryComponent />} />
									<Route path="/accounts" element={<AccountsComponent />} />
									<Route path="/Add_item" element={<AddItemComponent />} />
								</>
							)}
						</Routes>
					</main>
				</div>

				<footer className="app-footer text-center p-[10px] bg-[#34495e] text-off-white w-full fixed bottom-0">
					<p>&copy; 2023 QuickStock</p>
				</footer>
			</div>
		</Router>
	);
}

export default App;
