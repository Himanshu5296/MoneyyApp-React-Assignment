import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
 height:70px;
 border:1px solid black;
 background-color:rgb(106,1,1);
 color:white;
 display:flex;
 justify-content:space-between;
 margin-bottom:20px;
 font-size:20px;
 padding:5px 20px;
 & a{
    text-decoration:none;
    color:white;
 }`

const Navbar = () => {
  return (
    <Wrapper>
        <div>
            <p>E-Commerce</p>
        </div>
        <div id="navbar-second-container">
            <Link to="/">Products</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </Wrapper>
  )
}

export default Navbar