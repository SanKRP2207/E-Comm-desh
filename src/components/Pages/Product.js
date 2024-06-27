import React, {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Product = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCetegory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState('');// validation useState
    const [file, setFile] = useState();
    const [image, setImage] = useState();

    const navigate = useNavigate(); // redirect home page

    const AddProductCollection = async (e) => {

        // console.log(name, price, category, company);

        // // validation
        // if(!name || !price || !category || !company)
        // {
        //     setError(true);
        //     return false;
        // }

        // // get use uniqe id
        // let UserId = JSON.parse(localStorage.getItem('user'))._id;
        // console.log(UserId);

        // // connecting API node js
        // let result = await fetch('http://localhost:4500/addProduct', {
        //     method: 'post',
        //     body: JSON.stringify({ name, price, category, company, UserId }),
        //     headers: {
        //         'content-Type': 'application/json'

        //     }
        // });
        // result = await result.json();
        // console.log(result);
        e.preventDefault();
        if(!name || !price || !category || !company)
        {
            setError(true);
            return false;
        }


        const formdata = new FormData()
        formdata.append('file', file);
        formdata.append('name', name);
        formdata.append('price', price);
        formdata.append('category', category);
        formdata.append('company', company);

        axios.post('http://localhost:4500/addProduct', formdata)
        .then(res => setImage(res.data[0].image), navigate('/admin') )
        .catch(err => console.log(err))


    };




    return (

        <React.Fragment>
            


                <div className="headAddpro" style={{marginTop:'64px'}}>
                    <h1 >Add Product</h1>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} /><br />
                    <input className="addproductinput" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Product name" /><br />
                    {error && !name && <span className="addproductinputV">Enter Valid Name</span>}<br />

                    <input className="addproductinput" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price Name" /><br />
                    {error && !price && <span className="addproductinputV">Enter Valid Price</span>}<br />

                    <input className="addproductinput" type="text" value={category} onChange={(e) => setCetegory(e.target.value)} placeholder="Enter Product category Name" /><br />
                    {error && !category && <span className="addproductinputV">Enter Valid Category</span>}<br />

                    <input className="addproductinput" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product company Name" /><br />
                    {error && !company && <span className="addproductinputV">Enter Valid Company</span>}<br />

                    <button className="addproductbutton" type="submit" onClick={AddProductCollection} to={'/admin'}>Add Product</button>
                </div>
            
        </React.Fragment>
    )
};

export default Product;