import React, { useEffect } from "react";
import { Link } from 'react-router-dom'

const ProductList = () => {

    const [products, SetProducts] = React.useState([]);

    useEffect(() => {
        productlist();
    }, []);

    const productlist = async () => {

        let result = await fetch('http://localhost:4500/productList');
        result = await result.json();
        SetProducts(result);
    }

    const deleteproduct = async (id) => {
        let result = await fetch(`http://localhost:4500/delete/${id}`, {
            method: 'Delete'
        });
        result = await result.json();
        if (result) {
            productlist();
        }
    }

    const searchdata = async (event) => {

        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:4500/search/${key}`);

            result = await result.json();
            if (result) {
                SetProducts(result);
            };
        }else{
            productlist();
        }


    }

    return (
        <React.Fragment>
            <h1 className="P_heading">Product List</h1>
            <div className="searchbox"><input type="text" placeholder="Search" onChange={searchdata} />
            </div>

            <div className="p_header">
                <ul>
                    <li>S. No.</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Category</li>
                    <li>Company</li>
                    <li>Operation</li>


                </ul>
                {
                    products.length>0 ? products.map((item, index) =>
                        <ul key={item._id}>
                            <li>{index + 1}</li>
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                            <li>{item.category}</li>
                            <li>{item.company}</li>
                            <li><button type="button" onClick={() => deleteproduct(item._id)}>Delete</button>
                                <Link to={'/update/' + item._id}>update</Link></li>
                        </ul>
                    ):<h1>No Result Found</h1>
                }



            </div>

        </React.Fragment >
    )
}

export default ProductList;