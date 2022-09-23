import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage4.jpg";
import AvatarImage8 from "../assets/avatarImage8.jpg"
import { cardShadow, hoverEffect } from "../utils";

function ProjectRecommendation() {
  return (
    <RecommendProject>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <Info>
              <InfoName>Alan Fitzpatrick</InfoName>
              <InfoUpdate>Updated 5m ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="Potential buyer" />
        </Detail>
        <Title>Need a travel for tomorrow to Mexico.</Title>
        <ProjectInfo>
          Looking for a hotel in Guadalajara for two days for this price:
        </ProjectInfo>
        <PriceContainer>
          <Price>$8700</Price>
          <Badge content="Accept" clean />
          <Badge content="Decline" clean />
        </PriceContainer>
      </CardContent>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage8} alt="" />
            </Avatar>
            <Info>
              <InfoName>Adam Beyer</InfoName>
              <InfoUpdate>Updated 15m ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="Potential buyer" />
        </Detail>
        <Title>Need a travel for the nex week to Paris.</Title>
        <ProjectInfo>
          Looking for a hotel in Paris for two weeks for this price:
        </ProjectInfo>
        <PriceContainer>
          <Price>$5700</Price>
          <Badge content="Accept" clean />
          <Badge content="Decline" clean />
        </PriceContainer>
      </CardContent>
     
    </RecommendProject>
  );
}

const RecommendProject = styled.div`
  border-radius: 1rem;
  height: 150%;
  padding: 1rem;
  background-color: white;
  width: 27.5vw;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const CardContent = styled.div`
  margin: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;
const Info = styled.div``;
const InfoName = styled.h3`
  font-weight: 500;
`;
const InfoUpdate = styled.h5`
  font-weight: 300;
`;
const Title = styled.h4`
  font-weight: 500;
`;
const ProjectInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.5em;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
`;
const Price = styled.div``;

export default ProjectRecommendation;
