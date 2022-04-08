import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Main>
      <Container>
        <Header />
        <Body />
      </Container>
    </Main>
  );
}

export default App;

const Main = styled.div`
  background-color: #1e1e1e;
  height: 100vh;
`;
const Container = styled.div`
  text-align: center;
  width: 90%;
  margin: 0 auto;
`;
