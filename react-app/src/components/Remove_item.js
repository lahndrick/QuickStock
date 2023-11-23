import React, { Component } from "react";
import axios from 'axios';

class Remove_Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            barcode: "",
        };
    }

    handleInputChange = (e) => {
        this.setState({
            barcode: e.target.value,
        });
    };

    handleRemoveItem = async (e) => {
        e.preventDefault();

        const { barcode } = this.state;

        const params = new URLSearchParams();
        params.append('barcode', barcode);

        axios.post("http://3.26.71.160/index.php/AddRemove/removeItem", params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(res => {
                const { status } = res.data;

                if (status === 'success') {
                    console.log("item removed");
                    window.location.reload();
                } else {
                    alert(res.data);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    render() {
        return (
            <div className="remove-item-page">
                <section className="remove-item-section custom-remove-item-section w-full max-w-[400px] mx-auto my-[1%] p-[20px] box-border grid grid-cols-2 gap-4">
                    <h2 className="col-span-2 mb-4">Remove item</h2>
                    <form onSubmit={this.handleRemoveItem}>
                        <label>
                            barcode:
                            <input
                                type="number"
                                name="barcode"
                                value={this.state.barcode}
                                onChange={this.handleInputChange}
                                required
                                pattern=".{1,}"
                                title="Please enter the item barcode"
                                className="login-input w-50 p-[10px] mb-[10px] box-border"
                            />
                        </label>
                        <br />
                        <button
                            type="submit"
                            className="remove-button w-50 bg-[#e74c3c] text-[#fff] p-[15px] cursor-pointer rounded-[5px] border-none outline-none transition-colors"
                        >
                            Remove item
                        </button>
                    </form>
                </section>
            </div>
        );
    }
}

export default Remove_Item;
