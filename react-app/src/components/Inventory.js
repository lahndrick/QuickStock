import React, { useEffect, useState } from 'react';
import axios from "axios";
import RotateLoader from "react-spinners/RotateLoader";

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

				if (response.status === 200) {
					document.getElementById("InventoryLoader").classList.add("hidden");
					document.getElementById("InventorySection").classList.remove("hidden");
				}
				
				setInvData(response.data);
			} catch (error) {
				console.error('Error fetching data:', error.message);
			}
			console.log(invData);
		};


		fetchData();

		return () => {
			document.title = 'QuickStock - Inventory';
		};
	}, []);


	return (
		<section>
			<div id="InventoryLoader" className="loader flex justify-center place-items-center h-[90vh]">
				<RotateLoader
					size={15}
					color="#34495e"
				/>
			</div>
			<div id="InventorySection" className="inventory-section bg-white p-[20px] mb-[20px] rounded-[8px] shadow-md flex flex-col hidden">
				{/* ... */}
				<h2 className="text-3xl font-medium pb-2">Inventory</h2>
				<ul>
					{invData.map(item => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
				{/* ... */}
			</div>
		</section>
	);
}

export default Inventory;
