import React from "react";
import {Link} from "react-router-dom";
import BlueRightCaret from "./BlueRightCarret";
import "./Product.css";

interface ProductProps {
    color: string
    name: string
    description: string
}

const Product = (product: ProductProps) => {
    return (
        <div className="product">
            <div
                className={"rectangle"}
                style={{background: product.color}}>
            </div>
            <div className="product-content-wrapper">
                <div className="product-name-and-description-wrapper">
                    <h2 className="product-title">{product.name}</h2>
                    <p className="product-description">
                        {product.description}
                    </p>
                </div>
                <div className="read-more-wrapper">
                    <Link to={"/more"}>
                        Read more
                        <BlueRightCaret/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;