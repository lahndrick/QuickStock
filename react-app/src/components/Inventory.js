import React, { useEffect, useState } from 'react';
import axios from "axios";

function Inventory() {
	const [invData, setInvData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://3.26.71.160/index.php/main/getDashboardData", {
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
				});
				console.log('Response Data:', response.data);
			} catch (error) {
				console.error('Error fetching data:', error.message);
			}
		};


		fetchData();

		return () => {
			document.title = 'QuickSort';
		};
	}, []);

	return (
		<section className="inventory-section">
			{/* ... */}
			<h2>Inventory</h2>
			<ul>
				{invData.map(item => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
			{/* ... */}
		</section>
	);
}

export default Inventory;
