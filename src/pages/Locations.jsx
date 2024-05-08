import { Helmet } from "react-helmet";
import { HiddenHeader } from "../global/GlobalStyles";
import MapCard from "../components/main/Location/MapCard/MapCard";
import CtaSection from "../components/global/Cta/CtaSection";
import { locationData } from "../data";

const Locations = () => {
  return (
    <>
      <Helmet>
        <title>Locations - Find Our Closest Locations | Growsoc</title>
        <meta
          name="description"
          content="Growsoc has locations in major cities around the world. Feel free to contact any of our offices to start your project."
        />
      </Helmet>
      <main>
        <HiddenHeader>Locate Our Offices</HiddenHeader>
        <MapCard data={locationData?.wb} />
        <MapCard data={locationData?.od} reverse />
        <MapCard data={locationData?.mp} />
        <CtaSection />
      </main>
    </>
  );
};

export default Locations;
