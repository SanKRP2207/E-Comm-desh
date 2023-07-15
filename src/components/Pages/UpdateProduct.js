import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from 'axios';

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();

    useEffect(() => {
        showproductdata();
    }, [params]);

    const showproductdata = async () => {
        let result = await fetch(`http://localhost:4500/update/${params.id}`);

        // if (result.ok) {
            //   const name = await .name;
            // result = await result.json();
            setName( await (result.json()).name);
            // setPrice(result.price);
            // setCategory(result.category);
            // setCompany(result.company);
        // } else {
        //     console.log('error');
        // }
    };

    const updateProduct = () => {
        console.log(name, price, category, company);
    };

    return (
        <React.Fragment>
            <div className="updatepage">
                <h1 className='updatepageheader'>Update Product</h1>
                <input type="text" name="name" defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
                <input type="text" name="price" defaultValue={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" />
                <input type="text" name="category" defaultValue={category} onChange={(e) => setCategory(e.target.value)} placeholder="Product Category" />
                <input type="text" name="company" defaultValue={company} onChange={(e) => setCompany(e.target.value)} placeholder="Product Company" />
                <button type="submit" onClick={updateProduct}>Submit</button>
            </div>
        </React.Fragment>
    );
};

export default UpdateProduct;
