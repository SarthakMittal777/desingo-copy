import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Main } from "../global/GlobalStyles";
import { portfolioData } from "../data";
import HeroSection from "../components/main/Portfolio/Portfolio/Hero/HeroSection";
import CardsSection from "../components/main/Portfolio/Portfolio/Cards/CardsSection";
import PortfolioCard from "../components/main/Portfolio/PortfolioCard/PortfolioCard";
import CtaSection from "../components/global/Cta/CtaSection";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(" ");
  const { id } = useParams();

  useEffect(() => {
    const newPortfolio = portfolioData.find((port) => {
      return port.id === id;
    });
    setPortfolio(newPortfolio);
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{`${portfolio.title} | Growsoc`}</title>
        <meta name="description" content={portfolio.metaDescription} />
      </Helmet>
      <Main adjustBg>
        <HeroSection data={portfolio} />
        <CardsSection data={portfolio.projects} />
        <PortfolioCard twoColumns data={portfolio.more} />
        <CtaSection />
      </Main>
    </>
  );
};

export default Portfolio;
