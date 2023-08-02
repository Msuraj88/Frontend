import React from 'react';
import '../Styles/Header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Assets/logo.svg';
import Button from 'react-bootstrap/Button';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="Header">
                <Container className='bg-transperant'>
                    <Navbar.Brand href="#home" className='bg-transperant'>
                        <img
                            src={Logo}
                            width="60"
                            height="60"
                            className="d-inline-block align-top bg-transperant"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav" className='bg-transperant' >
                        <Nav className="me-auto parent topnav-centered bg-transperant">
                            <Nav.Link href="#Trade">Trade & Invest</Nav.Link>
                            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#Holdings">Holdings</Nav.Link>
                            <Nav.Link href="#Transactions">Transactions</Nav.Link>
                        </Nav>
                        <Nav className='bg-transperant wallet-button-sec'>
                            <Nav.Link href="#pricing" className='Wallet-btn'><span className='wallet-icon'><AccountBalanceWalletIcon /></span>Connect wallet</Nav.Link>
                            {/* <Button variant="outline-light"><span><AccountBalanceWalletIcon /></span>Connect wallet</Button>{' '} */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>



    );
}

export default Header;
