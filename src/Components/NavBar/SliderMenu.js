import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function OnActiveSideMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light  header fixed-top d-flex align-items-center">
      <span>Amaakka-Partner</span>
      <span className="navbar-toggler-icon mx-2" onClick={handleShow}/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Amaakka-Partner</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}
