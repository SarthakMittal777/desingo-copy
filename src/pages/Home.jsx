import styled from "styled-components";
import { Helmet } from "react-helmet";
import HeroSection from "../components/main/Home/Hero/HeroSection";
import QualitySection from "../components/main/Home/Qualities/QualitySection";
import PortfolioCard from "../components/main/Portfolio/PortfolioCard/PortfolioCard";
import { homeData, portfolioData } from "../data";
import CtaSection from "../components/global/Cta/CtaSection";
import { Main } from "../global/GlobalStyles";
import bgImage from "./../assets/images/shared/desktop/bg-pattern-leaf.svg";
import { QUERIES } from "../helpers";

const Wrap = styled.section`
  @media ${QUERIES.tablet} {
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: 40rem 20rem;
  }
  @media ${QUERIES.megaDesktop} {
    background-image: none;
  }
`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Growsoc - Software Development Agency</title>
        <meta
          name="description"
          content="Growsoc is a world-class software development agency that focuses on building innovative tch solutions like web apps, mobile apps and graphics design."
        />
      </Helmet>
      <Main>
        <HeroSection data={homeData} />
        <PortfolioCard data={portfolioData} />
        <Wrap>
          <QualitySection data={homeData} />
          <CtaSection />
        </Wrap>
      </Main>
    </>
  );
};

export default Home;
