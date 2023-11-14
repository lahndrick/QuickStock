// Your React component (Dashboard.js or any other)

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
	const [dashboardData, setDashboardData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://3.26.71.160/index.php/main/getDashboardData");
				console.log('Response Data:', response.data);  // Log data for debugging
				setDashboardData(response.data);
			} catch (error) {
				console.error('Error fetching data:', error.message);
			}
		};

		fetchData();
	}, []); // Run only on mountsdddss

	return (
		<div>
			<section className="dashboard-section">
				<h2>Dashboard</h2>
				{/* Display your fetched data here */}
				<ul>
					{dashboardData.map(item => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			</section>
		</div>
	);
}

export default Dashboard;
