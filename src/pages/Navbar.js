import React, { useState } from 'react';
import { Modal, Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <BootstrapNavbar bg="dark" expand="lg" expanded={expanded} style={{width:'100%'}}>
            <div className="container">
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <BootstrapNavbar.Brand href="/" style={{ color: 'rgb(233, 206, 138)' }}>Tushar Interior & Enterprises</BootstrapNavbar.Brand>
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title="Deals In" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/kitchen" style={{ color: 'rgb(233, 206, 138)' }}>Modular Kitchen</NavDropdown.Item>
                            <NavDropdown.Item href="/bedroom" style={{ color: 'rgb(233, 206, 138)' }}>Bedroom</NavDropdown.Item>
                            <NavDropdown.Item href="/hall" style={{ color: 'rgb(233, 206, 138)' }}>Hall</NavDropdown.Item>
                            <NavDropdown.Item href="/hotelandrestaurant" style={{ color: 'rgb(233, 206, 138)' }}>Hotel & Restaurant Interior</NavDropdown.Item>
                            <NavDropdown.Item href="/all" style={{ color: 'rgb(233, 206, 138)' }}>All type of furniture works</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/about" style={{ color: 'rgb(233, 206, 138)',marginLeft:'3rem' }}>About</Nav.Link>
                        <Nav.Link onClick={handleShow} style={{ color: 'rgb(233, 206, 138)',marginLeft:'3rem' }}>Contact Us</Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='contact-form' action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="e9e2712a-9542-4f13-a662-2b071cb7f858" />
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" className="form-control" placeholder='Your name' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" className="form-control" placeholder='xyz@someone.com' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input type='tel' id="phone" name="phone" className="form-control" pattern="[0-9]{10}" placeholder='123-45-678-90' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <input type='text' id="message" name="message" className="form-control" placeholder='Any message?' />
                        </div><br />
                        <button className='btn btn-dark' type="submit">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </BootstrapNavbar>
    );
};

export default Navbar;