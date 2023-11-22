import react, { useState } from "react";
import axios from 'axios';

function Add_Item() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDesc] = useState("");
    const [value, setValue] = useState("");
    const [status, setStatus] = useState("");
    const [time, setTime] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTime(new Date().toLocaleTimeString());
        
        switch (name) {
            case "id":
                setId(value);
                break;
            case "name":
                setName(value);
                break;
            case "description":
                setDesc(value);
                break;
            case "value":
                setValue(value);
                break;
            case "status":
                setStatus(value);
                break;
            default:
                console.log("something is wrong with Add_Item mate");
        }

    };

    const handleAddItem = async (e) => {
        e.preventDefault();

        const newItem = {
            id,
            name,
            description,
            value,
            status,
            time,
        };

        const params = new URLSearchParams();
        params.append('id', id);
        params.append('name', name);
        params.append('description', description);
        params.append('value', value);
        params.append('status', status);
        params.append('time', time);

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
                    alert("Error: " + res.data);
                    console.error("Error adding item", res);
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
                        ID:
                        <input
                            type="text"
                            name="id"
                            value={id}
                            onChange={handleInputChange}
                            required
                            pattern=".{1,}"
                            title="The item needs a description"
                            className="login-input w-50 p-[10px] mb-[10px] box-border"
                        />
                    </label>
                    <br />
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                            required
                            pattern=".{1,}"
                            title="The item needs a description"
                            className="login-input w-50 p-[10px] mb-[10px] box-border"
                        />
                    </label>
                    <br />
                    <label>
                        Description:
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
                        Value:
                        <input
                            type="text"
                            name="value"
                            value={value}
                            onChange={handleInputChange}
                            required
                            pattern=".{1,}"
                            title="The item needs a value"
                            className="login-input w-50 p-[10px] mb-[10px] box-border"
                        />
                    </label>
                    <br />
                    <label>
                        Status:
                        <input
                            type="text"
                            name="status"
                            value={status}
                            onChange={handleInputChange}
                            required
                            pattern=".{1,}"
                            title="The item needs a status"
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