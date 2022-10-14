import { computeHeadingLevel } from '@testing-library/react';
import { Modal, Button } from 'react-bootstrap';
import Moment from "moment";

function ModalShow(props) {



  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-primary text-white" closeButton>
        <Modal.Title className="display-6 " id="contained-modal-title-vcenter">
          {props.data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="d-flex flex-column gap-2 list-unstyled ">
          <li className="fs-5 shadow-sm px-3 py-1 bg-white rounded">
            <strong>id:&nbsp;</strong>
            {props.data.id}
          </li>
          <li className="fs-5 shadow-sm px-3 py-1 bg-white rounded">
            <strong>Name:&nbsp; </strong> {props.data.name}
          </li>
          <li className="fs-5 shadow-sm px-3 bg-white rounded">
            <strong>Sector:&nbsp;</strong> {props.data.sector}
          </li>
          <li className="fs-5 shadow-sm px-3 py-1 bg-white rounded">

            {/* <strong>Changed at:&nbsp;</strong> {Moment(props.data.changedAt).format('DD.MM.YYYY, h:mm:ss A')} */}
            <strong>Changed at:&nbsp;</strong> {props.data.changedAt}

          </li>
          <li className="fs-5 shadow-sm px-3 py-1 bg-white rounded">
            <strong>Original Revison:&nbsp;</strong> {props.data.originalRevision}
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalShow;
