import React from "react";

const Product = () => {

    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCetegory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState('');// validation useState


    const AddProductCollection = async () => {
        console.log(name, price, category, company);

        // validation
        if(!name || !price || !category || !company)
        {
            setError(true);
            return false;
        }

        // get use uniqe id
        let UserId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(UserId);

        // connecting API node js
        let result = await fetch('http://localhost:4500/addProduct', {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, UserId }),
            headers: {
                'content-Type': 'application/json'

            }
        });
        result = await result.json();
        console.log(result);
    };




    return (

        <React.Fragment>
            <div className="headAddpro">
                <h1 >Add Product</h1>
                <input className="addproductinput" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Product name" /><br />
                {error && !name && <span className="addproductinputV">Enter Valid Name</span>}<br />
                
                <input className="addproductinput" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price Name" /><br />
                {error && !price && <span className="addproductinputV">Enter Valid Price</span>}<br />
                
                <input className="addproductinput" type="text" value={category} onChange={(e) => setCetegory(e.target.value)} placeholder="Enter Product category Name" /><br />
                {error && !category && <span className="addproductinputV">Enter Valid Category</span>}<br />
                
                <input className="addproductinput" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product company Name" /><br />
                {error && !company && <span className="addproductinputV">Enter Valid Company</span>}<br />
                
                <button className="addproductbutton" type="button" onClick={AddProductCollection}>Add Product</button>
            </div>
        </React.Fragment>
    )
};

export default Product;