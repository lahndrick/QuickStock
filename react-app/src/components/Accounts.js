import React, { useEffect } from 'react';

function Accounts() {
	useEffect(() => {
		// Set the page title when the component mounts
		document.title = 'Accounts Dashboard';

		// Optionally, you can reset the title when the component unmounts
		return () => {
			document.title = 'QuickSort'; // Replace with your original title
		};
	}, []);
	return (

		<div>
			<section className="dashboard-section bg-white p-[20px] mb-[20px] rounded-[8px] shadow-md flex flex-col">
				{/* Dashboard content goes here */}
				<h2>Accounts Overview</h2>
				<p>Welcome to the Accounts dashboard. Here, you can manage your financial information.</p>
				{/* ... */}
			</section>
			<section className="dashboard-section bg-white p-[20px] mb-[20px] rounded-[8px] shadow-md flex flex-col">
				{/* Additional section for detailed information */}
				<h2>Account Details</h2>
				<p>This section provides detailed information about your accounts.</p>
				<div className="account-details">
					{/* Example content, replace with your actual data */}
					<div className="account-item">
						<h3>Account Name</h3>
						<p>Sample Account</p>
					</div>
					<div className="account-item">
						<h3>Balance</h3>
						<p>$10,000</p>
					</div>
					{/* Add more account details as needed */}
				</div>
			</section>
		</div>
	);
}

export default Accounts;
