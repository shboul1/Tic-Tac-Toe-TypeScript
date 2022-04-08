import { useState } from "react";
import { Center } from "../../GlobalStyles";
import { Modal, Button } from "react-bootstrap";
import { ModalText, ModalTextBig } from "./style";
type WinnerModalProps = {
  winner: string;
  handleRestartGame: () => void;
};
function WinnerModal({ winner, handleRestartGame }: WinnerModalProps) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Congratulations!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Center>
          <ModalText>The Winner is</ModalText>
          <ModalTextBig>{winner}</ModalTextBig>
          <Button
            variant="primary"
            onClick={() => {
              handleRestartGame();
              handleClose();
            }}
          >
            Restart Game
          </Button>
        </Center>
      </Modal.Body>
    </Modal>
  );
}

export default WinnerModal;
