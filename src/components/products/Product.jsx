import React from "react";
import { filteredProducts } from "../../recoil/productRecoil";
import { useRecoilValue } from "recoil";
import ProductItem from "./ProductItem";
import { filteredCounts } from "../../recoil/productRecoil";
const Products = () => {
        const totalItems = useRecoilValue(filteredCounts);
        const products = useRecoilValue(filteredProducts);
        if (totalItems > 0) {
            return (
                <div className="row">
                    {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                    ))}
                </div>
              );
        }
        else{
            return (
            <div className="row my-5">
                <div className="col-md-10 p-4 ">
                    <div className="row">
                        <div className="col-md-6 col-12 my-auto">
                            <img src={require('../../images/empty.svg')} className="img-fluid" alt="not found" width="350" />
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <h1 className="display-2 text-center text-danger">Nothing found..</h1>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
};
export default Products;