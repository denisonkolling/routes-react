import { useState } from "react";
import {
  Sidebar,
  Header,
  Container,
  Wrapper,
  Content,
  Title,
  Card,
  CardContainer,
  Input,
} from "../../components";
import { InputWrapper, StyledFontAwesomeIcon } from "./styles";
import img from "../../../public/screenshots/trail.jpg";
import { trails_db } from "../../../db/trails_db";

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
              style={{ backgroundColor: "white" }}
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
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Trails;
