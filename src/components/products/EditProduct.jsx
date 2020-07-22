import React, { useState, useEffect } from "react";
import { productState } from "../../recoil/productRecoil";
import { useRecoilState } from "recoil";
import { useHistory, useParams } from "react-router-dom";
const EditProduct = (props) => {
        let { id } = useParams();
        let history = useHistory();
        const [name, setName] = useState("");
        const [price, setPrice] = useState("");
        const [picture, setPicture] = useState("");
        const [type, setType] = useState("");
        const [products, setProducts] = useRecoilState(productState);
        const onSubmit = (e) => {
            e.preventDefault();
            const new_product = {
                name,
                price,
                picture,
                type,
                id,
            };
            
            const updated_products = products.map((product) =>
                product.id == id ? new_product : product
            );
            setProducts(updated_products);
            history.push("/");
        };
        useEffect(() => {
            // load product
            const product = products.find((product) => product.id == id);
            setName(product.name);
            setPrice(product.price);
            setPicture(product.picture);
            setType(product.type);
        }, []);
return (
<div className="container my-5">
    <div className="row">
        <div className="card border-0 shadow-lg col-md-10 col-12 mx-auto p-4">
            <div className="row">
                <div className="col-md-6 col-12 my-auto">
                    <img src={require('../../images/edit.svg')} className="img-fluid" alt="add a product" width="350" />
                </div>
                <div className="col-md-6 col-12 mx-auto">
                    <h2 className="text-center title"> Update Product</h2>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="row">
                                <div className="col-md-6 col-12 my-2 p-2">
                                    <input className="form-control" type="text" placeholder="Enter Product Name" value={name} onChange={(e)=> setName(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6 col-12 my-2 p-2">
                                    <input className="form-control" type="text" placeholder="Enter Product Price" value={price} onChange={(e)=> setPrice(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6 col-12 my-2 p-2">
                                    <input className="form-control" type="text" placeholder="Product Picture" value={picture} onChange={(e)=> setPicture(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6 col-12 my-2 p-2">
                                    <div className="select is-fullwidth">
                                        <select value={type} className="form-control" onChange={(e)=> setType(e.target.value)}
                                            >
                                            <option>Select Product Type</option>
                                            <option value="fruit">fruit</option>
                                            <option value="vegetables">vegetables</option>
                                            <option value="beverages">beverages</option>
                                            <option value="meals">meals</option>
                                            <option value="utensils">utensils</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 my-2 p-2"></div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-warning" onClick={onSubmit}>Update Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
};
export default EditProduct;