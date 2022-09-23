import React from "react";
import styled from "styled-components";
import AvatarImage from "../assets/avatarImage2.jpg";
import AvatarImage3 from "../assets/avatarImage3.jpg";
import avatarImage7 from "../assets/avatarImage7.jpg";
import { cardShadow, hoverEffect, themeColor } from "../utils";

function Projects() {
  return (
    <YourProjects>
      <Project>
        <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar>
        <Detail>
          <Title>Reunion with fly slow company</Title>
          <SubTitle>Today</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={AvatarImage3} alt="" />
        </Avatar>
        <Detail>
          <Title>Check the daily's fly</Title>
          <SubTitle>2 hours remaining</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={avatarImage7} alt="" />
        </Avatar>
        <Detail>
          <Title>Travel to London</Title>
          <SubTitle>5 days remaining</SubTitle>
        </Detail>
      </Project>
    </YourProjects>
  );
}

const YourProjects = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }

`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
 
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;



export default Projects;
