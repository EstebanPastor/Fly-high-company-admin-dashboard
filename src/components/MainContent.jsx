import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Info from "./Info";
import ProjectRecommendation from "./ProjectRecommendation";
import Projects from "./Projects";
import Invoices from "./Invoices";

function MainContent() {
  return (
    <Container>
      <Navbar />
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Info />
          </ColumnOne1>
          <ColumnTwo1>
            <TitleText>Projects and tasks: </TitleText>
            <Projects />
          </ColumnTwo1>
        </SectionOne>
        <SectionTwo>
          <InvoiceContainer>
            <TitleText>Recently purchased flight packages: </TitleText>
            <Invoices />
          </InvoiceContainer>

          <ColumnTwo2>
            <TitleText>Potential clients posts: </TitleText>
            <ProjectRecommendation />
          </ColumnTwo2>
        </SectionTwo>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 65%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
`;

const TitleText = styled.h3`
  height: 20%;
  /* padding-top */
`;

const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
`;

const InvoiceContainer = styled.div`
  height: 60%;
`;

const ColumnTwo2 = styled.div``;

export default MainContent;
