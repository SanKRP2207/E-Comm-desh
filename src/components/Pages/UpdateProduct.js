import React, { useState, useEffect } from "react";
import {useNavigate,  useParams } from "react-router-dom";
// import axios from 'axios';
import { EackEndLink } from "./EackEndLink";

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const showProductData = async () => {
            try {
                const response = await fetch(`${EackEndLink}/products/${params.id}`);
                if (response.ok) {
                    const data = await response.json();
                    setName(data.name);
                    setPrice(data.price);
                    setCategory(data.category);
                    setCompany(data.company);
                } else {
                    console.error('Error fetching product data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        showProductData();
        
    }, [params]);

    const updateProduct = async () => {
        const updatedProduct = { name, price, category, company };
        try {
            const response = await fetch(`${EackEndLink}/update/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });
            if (response.ok) {
                console.log('Product updated successfully');
                navigate('/admin')
                // Optionally, redirect to another page or give feedback to the user
            } else {
                console.error('Error updating product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <React.Fragment>
            <div className="updatepage" style={{marginTop:'64px'}}>
                <h1 className='updatepageheader'>Update Product</h1>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" />
                <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Product Category" />
                <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Product Company" />
                <button type="submit" onClick={updateProduct} to={'/admin'}>Submit</button>
            </div>
        </React.Fragment>
    );
};

export default UpdateProduct;
