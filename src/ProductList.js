import React, { useContext, useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { ProductContext } from './ProductContext'
import './style.css';

function ProductList(props) {
    let navigate = useNavigate();
let { getProduct, deleteProduct } = useContext(ProductContext)
let [ product, setProduct ] = useState()

let context = useContext(ProductContext);
useEffect(() => {
    console.log(context.products)
},[]);

function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
}


// function ProductList(props) {
    function ProductList(products) {
        if (products === null) return
        return products.map((product) =>
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} /> 
                {/* //height="55%" */}
                <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product.description}</Card.Subtitle>
                    <Card.Text>
                    <strong>Price: </strong> <span>${product.price}</span>
                    </Card.Text>
                    <Card.Text>
                  <strong>driFit: </strong>{product.driFit ? "Yes" : "No"}<span></span>
              </Card.Text>
    
                    <Link to={`/${product.id}`} className="btn btn-outline-primary mx-3">View</Link>
                    <Link to={`/${product.id}/edit`} variant="primary" className="btn btn-outline-secondary mx-3">Edit</Link>
                    <Button variant="outline-danger" className="btn btn-outline-primary mx-3" onClick={handleDeleteProduct.bind(this,product.id)}>Delete</Button>
                    

                </Card.Body>
            </Card>
            </Container>
        )
    }

    return (
        <>
            <h1>Products</h1>
            <Stack direction="horizontal" gap={3}>
                <div className="card-container">
                    <ProductContext.Consumer>
                        {({ products }) => (
                            ProductList(products)
                        )}
                    </ProductContext.Consumer>
                </div>
            </Stack>
        </>
    )
}

export default ProductList