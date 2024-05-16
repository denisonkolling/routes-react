import React from "react";
import {
  CardStyled,
  ImageSection,
  ContentSection,
  Title,
  Location,
  Rate,
  Reviews,
  Distance,
} from "./styles";

const Card = ({
  children,
  image,
  title,
  location,
  rate,
  reviews,
  distance,
  ...props
}) => {
  return (
    <CardStyled {...props}>
      <ImageSection>
        <img src={image} alt="Image description" style={{ width: "100%" }} />
      </ImageSection>
      <ContentSection>
        {children}
		<Title>⛺🌄🌅</Title>
        <Title>{title}</Title>
        <Location>{location}</Location>
        <Rate>{rate}</Rate>
        <Reviews>{reviews}</Reviews>
        <Distance>{distance}</Distance>
      </ContentSection>
    </CardStyled>
  );
};

export default Card;
