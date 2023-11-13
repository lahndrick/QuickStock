// Dashboard.js

import React, { useEffect } from 'react';

function Dashboard() {
	useEffect(() => {
		// Set the page title when the component mounts
		document.title = 'Dashboard';

		// Optionally, you can reset the title when the component unmounts
		return () => {
			document.title = 'QuickSort'; // Replace with your original title
		};
	}, []);
	return (
		<div>
			<section className="dashboard-section">
				{/* Dashboard content goes here */}
				<h2>Dashboard</h2>
				<p></p>
				{/* ... */}
			</section>
		</div>
	);
}

export default Dashboard;
