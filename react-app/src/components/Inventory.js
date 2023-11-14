import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Inventory() {
	const [dashboardData, setDashboardData] = useState([]);

	useEffect(() => {
		document.title = 'Inventory';

		return () => {
			document.title = 'QuickSort';
		};
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://hawk.qsnz.net/index.php/main/getDashboardData");
				console.log('Response Data:', response.data);
				setDashboardData(response.data);
			} catch (error) {
				console.error('Error fetching data:', error.message);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<section className="dashboard-section">
				<h2>Dashboard</h2>
				<Table striped bordered hover>
					<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Value</th>
						<th>Status</th>
						<th>Created At</th>
					</tr>
					</thead>
					<tbody>
					{dashboardData.map(item => (
						<tr key={item.id}>
							<td>{item.name}</td>
							<td>{item.description}</td>
							<td>${item.value}</td>
							<td>{item.status === 'active' ? 'Active' : 'Inactive'}</td>
							<td>{item.created_at}</td>
						</tr>
					))}
					</tbody>
				</Table>
			</section>
		</div>
	);
}

export default Inventory;
