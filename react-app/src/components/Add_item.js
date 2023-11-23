import react, { useState } from "react";
import axios from 'axios';

function Add_Item() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDesc] = useState("");
    const [location, setLocation] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;        

        switch (name) {
            case "name":
                setName(value);
                break;
            case "quantity":
                setQuantity(value);
                break;
            case "description":
                setDesc(value);
                break;
            case "location":
                setLocation(value);
                break;
            default:
                console.log("Error with Add item: handleInputChange.");
        }

    };

    const handleAddItem = async (e) => {
        e.preventDefault();

        const newItem = {
            name,
            quantity,
            description,
            location,
        };

        const params = new URLSearchParams();
        params.append('name', name);
        params.append('quantity', quantity);
        params.append('description', description);
        params.append('location', location);

        //TODO: this is possibly why 
        axios.post("http://3.26.71.160/index.php/AddRemove/addItem", params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(res => {
                const { status } = res.data;

                if (status === 'success') {
                    console.log("item added");
                    window.location.reload();
                } else {
                    alert(res.data);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="add-item-page">
            <section className="add-item-section custom-add-item-section w-full max-w-[400px] mx-auto my-[1%] p-[20px] box-border grid grid-cols-2 gap-4">
                <h2 className="col-span-2 mb-4">Add item</h2>
                <form onSubmit={handleAddItem}>
                    <label>
                        name:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                            required
                            pattern=".{1,}"
                            title="The item needs a name"
                            className="login-input w-50 p-[10px] mb-[10px] box-border"
                        />
                    </label>
                    <br />
                    <label>
                        description:
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={handleInputChange}
                            required
                            pattern=".{1,}"
                            title="The item needs a description"
                            className="login-input w-50 p-[10px] mb-[10px] box-border"
                        />
                    </label>
                    <br />
                    <label>
                        quantity:
                        <input
                            type="number"
                            name="quantity"
                            value={quantity}
                            onChange={handleInputChange}
                            required
                            pattern=".{1,}"
                            title="The item needs a quantity"
                            className="login-input w-50 p-[10px] mb-[10px] box-border"
                        />
                    </label>
                    <br />
                    <label>
                        location:
                        <input
                            type="text"
                            name="location"
                            value={location}
                            onChange={handleInputChange}
                            required
                            pattern=".{1,}"
                            title="The item needs a location"
                            className="login-input w-50 p-[10px] mb-[10px] box-border"
                        />
                    </label>
                    <br />
                    <button
                        type="submit"
                        className="add-button w-50 bg-[#34495e] text-[#fff] p-[15px] cursor-pointer rounded-[5px] border-none outline-none transition-colors"
                    >
                        Add item
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Add_Item;