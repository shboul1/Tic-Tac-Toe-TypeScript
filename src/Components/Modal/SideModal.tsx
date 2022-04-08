import { useEffect, useState, memo } from "react";
import { Center } from "../../GlobalStyles";
import { VscCircleOutline } from "react-icons/vsc";
import { MdOutlineClose } from "react-icons/md";
import { Modal } from "react-bootstrap";
import { Side, SideContainer, ModalText } from "./style";

type ModalProps = {
  setSide: (side: string) => void;
  cells: Array<string>;
};
function SideModal({ setSide, cells }: ModalProps) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  useEffect(() => {
    setShow(true);
  }, [cells]);
  return (
    <Modal keyboard={false} show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Tic Tac Toe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Center>
          <ModalText>Welcome on Tic Tac Toe Game</ModalText>
          <ModalText>please Select a side</ModalText>
          <SideContainer>
            <Side
              onClick={() => {
                setSide("x");
                handleClose();
              }}
            >
              <MdOutlineClose />
            </Side>
            <Side
              onClick={() => {
                setSide("o");
                handleClose();
              }}
            >
              <VscCircleOutline />
            </Side>
          </SideContainer>
        </Center>
      </Modal.Body>
    </Modal>
  );
}

export default memo(SideModal);
