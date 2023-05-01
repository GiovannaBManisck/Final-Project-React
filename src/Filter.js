import React, { useContext, useEffect, useState } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from './ProductContext'
import './style.css';

function Filter() {
    let params = useParams();
    const [ products, setProducts ] = useState([]);
    let { filter } = useContext(ProductContext);

    useEffect(() => {
        async function fetch() {
            await filter(params.filter).then(response => {
                setProducts(response)
            })
        }
    fetch();
    }, [params.filter])

    
    function ProductList() {
        if (products === null) return
        return products.map((product) =>
         <Card key={product.id}>
            <Card.Body className='cardBody'>
                <Card.Img variant="top" className="card-picture" src={product.image} />
                <Card.Title>{product.productName}</Card.Title>
                <Link to={`/products/${product.id}`} className="btn btn-outline-secondary mx-3" key={product.id}>View</Link>
            </Card.Body>
            </Card>
        )
    }

    return (
        <>
            <h1>Products</h1>
            <Stack direction="horizontal" gap={3}>
            <CardGroup className='card-group'>
                {ProductList()}
            </CardGroup>
            </Stack>
        </>
    )
}

export default Filter