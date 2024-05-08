import { Helmet } from "react-helmet";
import { Main, HiddenHeader } from "../global/GlobalStyles";
import ContentCard from "../components/main/About/ContentCard/ContentCard";
import LocationList from "../components/main/Location/LocationList/LocationList";
import { locationListData } from "../data";
import CtaSection from "../components/global/Cta/CtaSection";

const About = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>About - We Are More Than a Brand | Growsoc</title>
        <meta
          name="description"
          content="Founded in 2022, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact."
        />
      </Helmet>
      <Main>
        <HiddenHeader>About Us</HiddenHeader>
        {data && <ContentCard data={data.sectionOne} />}
        {data && <ContentCard reverse light gap data={data.sectionTwo} />}
        <LocationList data={locationListData} />
        {data && <ContentCard light data={data.sectionThree} />}
        <CtaSection />
      </Main>
    </>
  );
};

export default About;
