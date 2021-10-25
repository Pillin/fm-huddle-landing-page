import styled from "@emotion/styled";
import { IMG } from "./Image";
import { H1, P } from "./Typography";
import { PrimaryButton } from "./Buttons";
import Social from "./Social"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px 64px;
  padding: 16px 32px;
  max-width: 1440px;

  @media (min-width: 769px) {
    flex-direction: row;
    padding: 16px;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px 0px;
  max-width: 520px;
  width: 100%;
  align-items: center;
  padding: 64px 0px;
  @media (min-width: 769px) {
    align-items: flex-start;
    padding: 0px;
  }
`;

const Card = (props: {
  description: string;
  title: string;
  image: {
    mobile: string;
    desktop: string;
  };
  button: {
    label: string;
  }
}) => {

  return <><Container>
    <IMG {...props.image} alt="" style={{ maxWidth: "696px", width: "100%" }} />
    <Content>
      <H1>{props.title}</H1>
      <P>{props.description}</P>
      <PrimaryButton>{props.button.label}</PrimaryButton>
    </Content>
  </Container>
    <Social />
  </>
}


export default Card;