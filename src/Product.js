import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import { Image } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductContext } from './ProductContext'
import { useContext, useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import './style.css';

function Product(props) {

  let params = useParams()
  let navigate = useNavigate()

  let { getProduct, deleteProduct } = useContext(ProductContext)
  let [ product, setProduct ] = useState()
  let [ error, setError ] = useState()

  useEffect(() => {
    setError(null)
    async function fetch() {
        await getProduct(params.productId)
  .then((product) => setProduct(product))
  .catch((message) => setError(message))
}
fetch()
}, [params.contactId, getProduct])

function errorMessage() {
    return <Alert variant="danger">There was an error attempting to load this product: {error}</Alert>
  }

function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
  }

function loading() {
    return <div className="w-25 text-center"><Spinner animation="border" /></div>
  }


function productCard() {
    let { id, productName, description, driFit, price, image } = product
    return (
        <div className="card h-100">
        <Card style={{ width: '18rem' }}>
            <Card.Body >
              <Card.Title>{productName}</Card.Title>
              <Image src={image} width="200px" />
              <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
              <Card.Text>
                <strong>Price: </strong> <span>${price}</span>
              </Card.Text>
              <Card.Text>
              <strong>driFit: </strong>{product.driFit ? "Yes" : "No"}<span></span>
              </Card.Text>
              <Link to={`/products/${product.id}`} key={product.id} className="btn btn-outline-primary mx-3">View</Link>
              <Link to={`/${product.id}/edit`} className="btn btn-primary mx-3">Edit</Link>
              <Button variant="danger" className="btn btn-primary mx-3" onClick={handleDeleteProduct.bind(this, product.id)}>Delete</Button>
            </Card.Body>
            <p><Button variant="link" onClick={() => navigate(-1)}>Go Back</Button></p>
          </Card>
          </div>
    )
}
if (error) return errorMessage()
if (product === undefined) return loading()
return product.id !== parseInt(params.productId) ?  loading() : productCard()
}

export default Product