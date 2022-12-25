import { Button, Offcanvas } from "solid-bootstrap";
import { Component, createSignal } from "solid-js";

const Settings: Component = () => {
  const [show, setShow] = createSignal(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Settings
      </Button>

      <Offcanvas show={show()} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Preferences</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>Dark mode</li>
            <li>Font choice</li>
            <li>No inline dice roller</li>
            <li>Disable spread behavior</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Settings;
