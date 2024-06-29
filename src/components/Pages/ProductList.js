import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { EackEndLink } from "./EackEndLink";


const ProductList = ({ showDeleteAndUpdate = true, showBuyAndShopping = false }) => {

    const [products, SetProducts] = React.useState([]);

    useEffect(() => {
        productlist();
    }, []);

    const productlist = async () => {

        let result = await fetch(`${EackEndLink}/productList`);
        result = await result.json();
        SetProducts(result);
    }

    const deleteproduct = async (id) => {
        let result = await fetch(`${EackEndLink}/delete/${id}`, {
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
            try {
                let response = await fetch(`${EackEndLink}/search/${key}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                let result = await response.json();

                if (result) {
                    SetProducts(result);
                }
            } catch (error) {
                console.error('Error fetching search data:', error);
            }
        } else {
            productlist();
        }


    }

    return (
        <React.Fragment>
            <div style={{ marginTop: '64px' }}>


                {/* <h1 className="P_heading">Product List</h1> */}
                <div className="searchbox"><input type="text" placeholder="Search" onChange={searchdata} /></div>

                <div className="p_header">
                    {/* <ul> */}
                    {/* <li>S. No.</li>
                    <li>Image</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Category</li>
                    <li>Company</li>
                    <li>Operation</li> */}


                    {/* </ul> */}
                    {
                        products.length > 0 ? products.map((item, index) =>
                            <div className="card">

                                <div key={item._id} >
                                    {/* <li>{index + 1}</li> */}
                                    <div className="card-img-con"  style={{ width: '18vw', height: '26vh', padding: '10px 20px 0px 10px' }}>
                                        <img className="card-img"  src={`${EackEndLink}/images/${item.image}`} alt={item.name} width="100%" height="100%" />
                                    </div>
                                    <div className="card-content" style={{ textAlign: 'initial', padding: '0px 20px 0px 20px' }}>
                                        <h3 style={{ margin: '3px 0' }}><strong>Name:-</strong> {item.name}</h3>
                                        <p style={{ margin: '3px 0' }}><strong>Price:-</strong> {item.price}</p>
                                        <p style={{ margin: '3px 0' }}><strong>Category:-</strong> {item.category}</p>
                                        <p style={{ margin: '3px 0' }}><strong>Company:-</strong> {item.company}</p>
                                    </div>
                                    {showDeleteAndUpdate && (

                                        <div style={{ border: 'none', cursor: 'pointer', padding: '3px', display: 'flex', justifyContent: 'space-evenly', boxShadow: '15px' }}>
                                            <button type="button" onClick={() => deleteproduct(item._id)} >Delete</button>
                                            <Link to={'/update/' + item._id} style={{ textDecoration: 'none', color: 'black', backgroundColor: '#2121', padding: '0px 3px 0px 3px', boxShadow: '15px', border: '0.5px solid #3039', borderRadius: '2px' }}>Update</Link>
                                        </div>
                                    )}

                                    {showBuyAndShopping && (
                                        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                                            <Link to={'/buy/' + item._id} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'blue', padding: '0px 10px', borderRadius: '2px' }}>Buy</Link>
                                            <Link to={'/shoping/' + item._id} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'orange', padding: '0px 10px', borderRadius: '2px' }}>Card</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : <h1>No Result Found</h1>
                    }



                </div>
            </div>
        </React.Fragment >
    )
}

export default ProductList;