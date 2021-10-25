import styled from "@emotion/styled";
import { IMG } from "./components/Image";
import Card from './components/Card';
import { card, background } from "./data.json"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(257, 40%, 49%);
  min-height:100vh;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <IMG
        {...background.image}
        alt=""
        style={{
          aspectRatio: "1440 / 800",
          height: "100vh",
          zIndex: 2,
          position: "fixed"
        }} />
      <Card button={{ label: "Register" }} {...card} />
    </Container>
  );
}

export default App;
