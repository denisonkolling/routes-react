import { useState } from "react";
import {
  Sidebar,
  Header,
  Container,
  Wrapper,
  Content,
  Card,
  CardContainer,
  Input,
  Button,
} from "../../components";
import { InputWrapper, StyledFontAwesomeIcon, ButtonWrapper } from "./styles";
import { trails_db } from "../../../db/trails_db";
import { Link } from "react-router-dom";

const Trails = () => {
  const [trails, setTrails] = useState(trails_db);

  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Container>
        <Content>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Enter a city, park or trail..."
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
            />
            <StyledFontAwesomeIcon />
          </InputWrapper>
          <CardContainer>
            {trails.map((trail) => (
              <Card
                image={trail.image}
                title={trail.title}
                location={trail.location}
                rate={trail.rate}
                reviews={trail.reviews}
                distance={trail.distance}
              />
            ))}
          </CardContainer>
          <ButtonWrapper>
            <Link to="/create-trail">
              <Button Text="Create New Trail!"></Button>
            </Link>
          </ButtonWrapper>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Trails;
