// Import necessary components
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
		<div className="app">
			<Router>
				<div className="app-container">
					<nav className="app-sidebar">
						<div className="sidebar-header">
							<h1>QuickStock</h1>
						</div>
						<ul>
							{/* Wrap the entire li with Link */}
							<li>
								<Link to="/dashboard">
									Dashboard
								</Link>
							</li>
							<li>
								<Link to="/inventory">
									Inventory
								</Link>
							</li>
							<li>
								<Link to="/accounts">
									Accounts
								</Link>
							</li>
							<li>
								<Link to="/login">
									Login
								</Link>
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

			<footer className="app-footer">
				<p>&copy; 2023 QuickStock</p>
			</footer>
		</div>
	);
}

export default App;
