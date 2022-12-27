import React from "react";
import styled from "styled-components";


const Footer = () =>{
    return (
        <Container>
            <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3">
                    © 2020 Copyright: 
                    <a className="text-dark" href="">Stan CHAPIT</a>
                </div>
            </footer>
        </Container>
    )
}

export default Footer;  

const Container = styled.header`
footer{
    margin-top : 5%;
}
img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: white;
    margin-bottom : 10px;
  }
`;