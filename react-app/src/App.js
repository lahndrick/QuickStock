// Import necessary components
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import InventoryComponent from './components/Inventory';
import AccountsComponent from './components/Accounts';
import DashboardComponent from './components/Dashboard';
import LoginComponent from  './components/Login';

// Define functional components for each section
const Dashboard = () => (
	<section className="dashboard-section">
		<h2>Overview</h2>
		{/* Dashboard content goes here */}
	</section>
);

const Inventory = () => (
	<section className="inventory-section">
		<h2>Inventory</h2>
		{/* Inventory content goes here */}
	</section>
);
const Accounts = () => (
	<section className="inventory-section">
		<h2>Accounts</h2>
		{/* Inventory content goes here */}
	</section>
);
const Login = () => (
	<section className="login-section">
		<h2>Login</h2>
	</section>
)

function App() {
	return (
		<div className="app flex flex-col h-screen">
			<Router>
				<div className="app-container">
					<nav className="app-sidebar">
						<div className="sidebar-header">
							<h1 class="font-bold text-xl">QuickStock</h1>
						</div>
						<ul>
							{/* Wrap the entire li with Link */}
							<li id="dashboard-nav">
								<NavLink to="/dashboard">
									Dashboard
								</NavLink>
							</li>
							<li id="inventory-nav">
								<NavLink to="/inventory">
									Inventory
								</NavLink>
							</li>
							<li id="accounts-nav">
								<NavLink to="/accounts">
									Accounts
								</NavLink>
							</li>
							<li id="login-nav">
								<NavLink to="/login">
									Login
								</NavLink>
							</li>
						</ul>
					</nav>

					<main className="app-main">
						<Routes>
							<Route path="/dashboard" element={<DashboardComponent />} />
							<Route path="/inventory" element={<InventoryComponent />} />
							<Route path="/accounts" element={<AccountsComponent />} />
							<Route path="/login" element={<LoginComponent />} />
						</Routes>
					</main>
				</div>
			</Router>

			<footer className="app-footer text-center p-[10px] bg-primary text-off-white">
				<p>&copy; 2023 QuickStock</p>
			</footer>
		</div>
	);
}

export default App;
