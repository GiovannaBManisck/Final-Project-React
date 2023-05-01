// The home component contains a header with the 
//company name and logo (you can use an icon or a fake 
//logo from the internet)

// The home component also displays some of the 
//items sold by the company (limit the list to 3 items)
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Stack from 'react-bootstrap/Stack'
import { Link, Outlet, useNavigate } from "react-router-dom"
import styles from './Home.module.css';
import { Container } from 'react-bootstrap';

function Home() {

let navigate = useNavigate();
    function handleSearch(e) {
        if ( e.target.value === "") return;
        navigate("/search/" + e.target.value)
    }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className={styles.navcontainer}>
        <Navbar.Brand>
            <img
            alt=""
            src="https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            width="30"
            height="30"
            className="d-inline-block-align-top"
            />{' '}
            MADCAP SOCCER STORE
        </Navbar.Brand>
          <Nav className={styles.brand}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/new" className="nav-link">Create</Link>
          </Nav>
            <input onChange={handleSearch}/>
        </Container>
        
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
    </>
  )
}

export default Home