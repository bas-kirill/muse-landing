import React from "react";
import Product from "./product/Product";
import "./OurProducts.css";

const OurProducts = () => {
    return (
        <div id="our-products-wrapper">
            <h1>Our products</h1>
            <div id="products">
                <Product
                    color="#FFC800"
                    name="Ultimate Guitar"
                    description="The best platform for music makers to play songs they love. Home to the world's largest music community."/>

                <Product
                    color="#2E68C0"
                    name="Muse Score"
                    description="Create, play back, and print sheet music with free open source notation software."/>

                <Product
                    color="#EA1542"
                    name="audio.com"
                    description="The easiest way to share any sound online."/>

                <Product
                    color="#1D4ED8"
                    name="Audacity"
                    description="The world's most popular audio editing and recording app."/>
            </div>
        </div>
    );
}

export default OurProducts;
