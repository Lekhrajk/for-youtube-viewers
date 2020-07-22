import React from "react";
import { useRecoilState } from "recoil";
import { productState } from "../../recoil/productRecoil";
import { Link } from "react-router-dom";
import View from "../layout/View";
import '../../styles/item.css';
import Swal from "sweetalert2";
const ProductItem = (props) => {
        const { product } = props;
        const [products, setProducts] = useRecoilState(productState);
        const deleteProduct = (id) => {
            Swal.fire({
                title: "Are you sure?",
                type: "warning",
                text: "You won't be able to revert this!",
                footer: "",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                onOpen: () => {}
            }).then((result) => {
                if (result.value) {
                    const new_products = products.filter((product) => product.id !== id);
                    setProducts(new_products);
                    Swal.fire(
                        'Deleted!',
                        'Selected product has been deleted.',
                        'success'
                    )
                }
            });
        };
return (
<View>
    <div className="box box__custom card border-0 shadow my-3 p-3">
        <Link to={`/editProduct/${product.id}`} className="button button-edit btn btn-warning">
        edit
        </Link>
        <button onClick={()=> deleteProduct(product.id)}
            className="button button-delete btn btn-danger"
            >
            delete
        </button>
        <h1 className="title display-4">{product.picture}</h1>
        <h3 className="subtitle">{product.name}</h3>
        <div className="d-inline-block"><span className="tag">₹ {product.price}/kg </span></div>
    </div>
</View>
);
};
export default ProductItem;