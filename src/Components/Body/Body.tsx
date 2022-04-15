import { useState } from "react";
import SideModal from "../Modal/SideModal";
import WinnerModal from "../Modal/WinnerModal";
import { BodyContainer, Squares, Square } from "./style";
export default function Body() {
  const squares = new Array(9).fill("");
  const [side, setSide] = useState<string>("x");
  const [cells, setCells] = useState<Array<string>>(Array(9).fill(""));
  const [winner, setWinner] = useState<string>("");
  const checkWinner = (cells: {}[]) => {
    let combos: { [key: string]: any } = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattren: any) => {
        if (
          cells[pattren[0]] === "" ||
          cells[pattren[1]] === "" ||
          cells[pattren[2]] === ""
        ) {
        } else if (
          cells[pattren[0]] === cells[pattren[1]] &&
          cells[pattren[1]] === cells[pattren[2]]
        ) {
          setWinner(side);
        }
      });
    }
  };
  const handleClick = (idx: number) => {
    if (cells[idx] !== "") {
      return;
    } else if (side === "x") {
      setSide("o");
      cells[idx] = "x";
    } else {
      setSide("x");
      cells[idx] = "o";
    }
    setCells(cells);
    checkWinner(cells);
  };
  const handleRestartGame = () => {
    setWinner("");
    setCells(Array(9).fill(""));
  };
  return (
    <BodyContainer>
      <Squares>
        {[
          squares.map((square, idx) => (
            <Square key={idx} onClick={() => handleClick(idx)}>
              {cells[idx]}
            </Square>
          )),
        ]}
      </Squares>
      <SideModal setSide={setSide} cells={cells} />
      {winner && (
        <WinnerModal winner={winner} handleRestartGame={handleRestartGame} />
      )}
    </BodyContainer>
  );
}
