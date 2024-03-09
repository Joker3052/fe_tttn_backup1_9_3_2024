import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { baseURL } from '../../../Services/axios-customize';

function ModalView(props) {
  const { show, handleClose, dataStoreView } = props;
  const [img_url, set_img_url] = useState("");
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [address, set_address] = useState("");
  const [phone, set_phone] = useState("");
  useEffect(() => {
    if (show) {
      set_img_url(`${baseURL}${dataStoreView.image}`)
      set_name(dataStoreView.name)
      set_phone(dataStoreView.phone)
      set_address(dataStoreView.address)
      set_email(dataStoreView.email)
    }
  }, [dataStoreView])

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Product: {name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content">
          <div className="image-container-modal">
            <img src={img_url} alt={name} className="modal-image" />
          </div>
          <div className="info-container">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Address:</strong> {address}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalView;
