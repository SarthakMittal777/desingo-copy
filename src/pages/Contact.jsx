import { Helmet } from "react-helmet";
import ContactCard from "../components/main/Contact/ContactCard/ContactCard";
import LocationList from "../components/main/Location/LocationList/LocationList";
import { locationListData } from "../data";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - We Want to Hear From You | Growsoc</title>
        <meta
          name="description"
          content="We are always excited to hear from our esteemed customers. Contact us to kick-start your new project."
        />
      </Helmet>
      <main>
        <ContactCard />
        <LocationList data={locationListData} />
      </main>
    </>
  );
};

export default Contact;
