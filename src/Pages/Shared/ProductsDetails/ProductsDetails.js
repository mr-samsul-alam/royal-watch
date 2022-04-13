import React, { useEffect, useState } from 'react';
import './ProductsDetails.css' 
import DetailsThumb from './DetailsThumb'; 

 


class ProductsDetails extends React.Component {


    
    state = {
        products: [
            {
                "_id": "1",
                "name": "Nike Shoes",
                "src": [
                    "https://cdn.shopify.com/s/files/1/1692/8885/products/product-19_2000x.jpg?v=1485346640",
                    "https://cdn.shopify.com/s/files/1/1692/8885/products/product-7_2000x.jpg?v=1484829789",
                    "https://cdn.shopify.com/s/files/1/1692/8885/products/product-13_fea94dfc-8ebe-4d44-b628-7075e72f9ab1_2000x.jpg?v=1485348285",
                    "https://cdn.shopify.com/s/files/1/1692/8885/products/product-11_2000x.jpg?v=1540786610"
                ],
                "description": "UI/UX designing, html css tutorials",
                "about": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23, 
                "quantity": 1
            }
        ],
        index: 0
    };

    myRef = React.createRef();

    handleTab = index => {
        this.setState({ index: index })
        const images = this.myRef.current.children;
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    componentDidMount() {
        const { index } = this.state;
        this.myRef.current.children[index].className = "active";
    }


    render() {
        const { products, index } = this.state;
        return (
            <div className="container">
                {
                    products.map(item => (
                        <div className="details" key={item._id}>
                            <div className="big-img"> 
                                <img src={item.src[index]} alt="" />
                            </div>

                            <div className="box">
                                <div className="row">
                                    <h2>{item.name}</h2>
                                    <span>${item.price}</span>
                                </div>  
                                <p>{item.about}</p> 

                                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                                <button className="cart">Add to cart</button>

                            </div>
                        </div>
                    ))
                }
            </div>
        );
    };
}

export default ProductsDetails;