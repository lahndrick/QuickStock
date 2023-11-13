<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Inventory Manager Dashboard</title>
	<link rel="stylesheet" href="<?php echo base_url('application/assets/css/styles.css'); ?>">
</head>
<body>

<nav>
	<h1>Inventory Manager Dashboard</h1>
</nav>

<div id="container">

	<div class="dashboard">
		<h2>Item List</h2>
		<div class="item-list">
			<table>
				<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Quantity</th>
					<th>Price</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>1</td>
					<td>Item A</td>
					<td>100</td>
					<td>$10.00</td>
				</tr>
				<!-- Add more rows -->
				</tbody>
			</table>
		</div>

		<div class="add-item-form">
			<h2>Add New Item</h2>
			<form>
				<label for="itemName">Item Name:</label>
				<input type="text" id="itemName" name="itemName">

				<label for="quantity">Quantity:</label>
				<input type="number" id="quantity" name="quantity">

				<label for="price">Price:</label>
				<input type="text" id="price" name="price">

				<button type="submit">Add Item</button>
			</form>
		</div>
	</div>

	<div class="dashboard">
		<h2>Inventory Charts</h2>
		<div class="charts">
			<div class="chart">
				<h3>Chart 1</h3>
				<!-- Chart content goes here -->
			</div>

			<div class="chart">
				<h3>Chart 2</h3>
				<!-- Chart content goes here -->
			</div>

			<!-- Add more charts -->
		</div>
	</div>

</div>

</body>
</html>
