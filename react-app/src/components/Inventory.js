import React, {useEffect} from 'react';

function Inventory() {
	useEffect(() => {
		// Set the page title when the component mounts
		document.title = 'Inventory';

		// Optionally, you can reset the title when the component unmounts
		return () => {
			document.title = 'QuickSort'; // Replace with your original title
		};
	}, []);
	return (
		<section className="dashboard-section">
			{/* Dashboard content goes here */}
			<h2>Inventory</h2>
			{/* ... */}
		</section>
	);
}

export default Inventory;
