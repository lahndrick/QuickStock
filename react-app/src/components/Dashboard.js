// Your React component (Dashboard.js or any other)

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RotateLoader from "react-spinners/RotateLoader";

function Dashboard() {
	const [dashboardData, setDashboardData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://3.26.71.160/index.php/main/getDashboardData");
				console.log('Response Data:', response.data);  // Log data for debugging

				if (response.status === 200) {
					document.getElementById("DashboardLoader").classList.add("hidden");
					document.getElementById("DashboardSection").classList.remove("hidden");
				}

				setDashboardData(response.data);
			} catch (error) {
				console.error('Error fetching data:', error.message);
			}
		};

		fetchData();

		return () => {
			document.title = 'QuickStock - Dashboard';
		};
	}, []); // Run only on mountsdddss

	return (
		<div>
			<div id="DashboardLoader" className="loader flex justify-center place-items-center h-[90vh]">
				<RotateLoader
					size={15}
					color="#34495e"
				/>
			</div>
			<section id="DashboardSection" className="dashboard-section bg-white p-[20px] mb-[20px] rounded-[8px] shadow-md flex flex-col hidden">
				<h2 className="text-3xl font-medium pb-2">Welcome to QuickStock!</h2>
				{/* Display your fetched data here */}
				<ul>
					{dashboardData.map(item => (
						<li key={item.id}>
							ID: {item.barcode}, name: {item.name}, quantity: {item.quantity}
						</li>
					))}
				</ul>

			</section>
		</div>
	);
}

export default Dashboard;
