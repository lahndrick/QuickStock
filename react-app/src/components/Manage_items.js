import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Manage_Items() {

    useEffect(() => {
		return () => {
			document.title = 'QuickStock - Manage Items';
		};
	}, []);

    return (
        <div className="manage-items-page flex h-[90vh] items-center">
            <section className="manage-items-section w-fit max-w-[400px] mx-auto my-[1%] p-[20px] box-border place-items-center">
                <h2 className="text-3xl font-medium mb-4 w-fit">Manage Items</h2>
                <div className="mb-4 w-fit">
                    <Link
                        to="/add_item"
                        className="manage-button bg-[#3498db] text-[#fff] p-[15px] cursor-pointer rounded-[5px] border-none outline-none transition-colors mr-4"
                    >
                        Add Item
                    </Link>
                    <Link
                        to="/remove_item"
                        className="manage-button bg-[#e74c3c] text-[#fff] p-[15px] cursor-pointer rounded-[5px] border-none outline-none transition-colors"
                    >
                        Remove Item
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Manage_Items;
