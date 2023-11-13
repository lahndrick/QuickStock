// Import necessary components
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import InventoryComponent from './components/Inventory';
import AccountsComponent from './components/Accounts';

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

function App() {
	return (
		<div className="app">
			<Router>
				<div className="app-container">
					<nav className="app-sidebar">
						<div className="sidebar-header">
							<h1>Stock Management</h1>
						</div>
						<ul>
							{/* Wrap the entire li with Link */}
							<li>
								<Link to="/">
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
						</ul>
					</nav>

					<main className="app-main">
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/inventory" element={<InventoryComponent />} />
							<Route path="/accounts" element={<AccountsComponent />} />
						</Routes>
					</main>
				</div>
			</Router>

			<footer className="app-footer">
				<p>&copy; 2023 Stock Management System</p>
			</footer>
		</div>
	);
}

export default App;
