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
			<section className="dashboard-section bg-white p-[20px] mb-[20px] rounded-[8px] shadow-md flex flex-col">
				<h2>Welcome to QuickStock!</h2>
				{/* Display your fetched data here */}
				<ul>
					{dashboardData.map(item => (
						<li key={item.id}>
							ID: {item.id}, name: {item.name}, Value: {item.value}
						</li>
					))}
				</ul>

			</section>
		</div>
	);
}

export default Dashboard;
