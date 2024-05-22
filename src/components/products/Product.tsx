import React from "react";
import {Link} from "react-router-dom";
import BlueRightCaret from "./BlueRightCarret";

interface ProductProps {
    color: string
    name: string
    description: string
}

const Product = (product: ProductProps) => {
    return (
        <div className="product">
            <div style={{background: product.color}} className={"rectangle"}></div>
            <div className="product-name-and-description-wrapper">
                <h2>{product.name}</h2>
                <p>
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
    );
};

export default Product;