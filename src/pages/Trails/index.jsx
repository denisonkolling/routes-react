import React from "react";
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

const Trails = () => {
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
            <Card
              image={img}
              title={"Lake Tahoe"}
              location={"Tahoe National Forest"}
              rate={"⭐⭐⭐⭐"}
              reviews={"(246)"}
              distance={"Length 2.5mi - Time 2h 39m"}
            ></Card>
            <Card
              image={img}
              title={"Los Padres"}
              location={"Los Padres National Forest"}
              rate={"⭐⭐⭐⭐"}
              reviews={"(312)"}
              distance={"Length: 3.2 mi - Time: 2h 45min"}
            ></Card>
            <Card
              image={img}
              title={"Mount Rainier"}
              location={"Mount Rainier National Park"}
              rate={"⭐⭐⭐⭐"}
              reviews={"(198)"}
              distance={"Length: 2.8 mi - Time: 2h 36min"}
            ></Card>
            <Card
              image={img}
              title={"Rocky Mountain"}
              location={"Rocky Mountain National Park"}
              rate={"⭐⭐⭐⭐"}
              reviews={"(189)"}
              distance={"Length: 2.6 mi - Time: 2h 42min"}
            ></Card>
            <Card
              image={img}
              title={"Grand Canyon"}
              location={"Grand Canyon National Park"}
              rate={"⭐⭐⭐⭐"}
              reviews={"(365)"}
              distance={"Length: 2.4 mi - Time: 2h 38min"}
            ></Card>
            <Card
              image={img}
              title={"Olympic"}
              location={"Olympic National Park"}
              rate={"⭐⭐⭐⭐"}
              reviews={"(277)"}
              distance={"Length: 2.7 mi - Time: 2h 40min"}
            ></Card>
          </CardContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Trails;
