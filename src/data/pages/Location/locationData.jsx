// import CanadaImage from "../../../assets/images/shared/desktop/illustration-canada.svg";
// import AustraliaImage from "../../../assets/images/shared/desktop/illustration-australia.svg";
// import UkImage from "../../../assets/images/shared/desktop/illustration-united-kingdom.svg";
import WB from "../../../assets/images/shared/desktop/illustration-wb.jpeg";
import OD from "../../../assets/images/shared/desktop/illustration-od.jpeg";
import MP from "../../../assets/images/shared/desktop/illustration-mp.jpeg";

const locationListData = [
  {
    country: "India",
    state: "West Bengal",
    // image: CanadaImage,
    image: WB,
    label: "see our West Bengal Office contact information",
    anchorLink: "/locations",
  },
  {
    country: "India",
    state: "Odisha",
    // image: AustraliaImage,
    image: OD,
    label: "see our Odisha Office contact information",
    anchorLink: "/locations",
  },
  {
    country: "India",
    state: "Madhya Pradesh",
    // image: UkImage,
    image: MP,
    label: "see our Madhya Pradesh Office contact information",
    anchorLink: "/locations",
  },
];

const locationData = {
  wb: {
    id: "west-bengal",
    country: "India",
    state: "West Bengal",
    image: WB,
    anchorLink: "",
    address: {
      office: "Growsoc Central Location",
      street: "Anandapur, Kolkata",
      state: "West Bengal 700107",
    },
    contact: {
      header: "Contact",
      phone: "+91 80939 09455",
      mail: "growsoctechnologies@gmail.com",
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231300854!2d88.26495036047287!3d22.5354063742071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1715164994180!5m2!1sen!2sin",
    },
  },
  od: {
    id: "odisha",
    country: "India",
    state: "Odisha",
    image: OD,
    anchorLink: "",
    address: {
      office: "Growsoc Cuttack Office",
      street: "Buxibazar, Cuttack",
      state: "Odisha 753001",
    },
    contact: {
      header: "Contact",
      phone: "+91 80939 09455",
      mail: "growsoctechnologies@gmail.com",
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239235.63857567505!2d85.57237273599432!3d20.462857972227745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d832223af81%3A0x22f5fa1c913be52e!2sCuttack%2C%20Odisha!5e0!3m2!1sen!2sin!4v1715164945384!5m2!1sen!2sin",
    },
  },
  mp: {
    id: "madhya-pradesh",
    country: "India",
    state: "Madhya Pradesh",
    image: MP,
    anchorLink: "",
    address: {
      office: "Growsoc Indore Office",
      street: "Shivaji Nagar, Indore",
      state: "Madhya Pradesh 452003",
    },
    contact: {
      header: "Contact",
      phone: "+91 80939 09455",
      mail: "growsoctechnologies@gmail.com",
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.4948298901!2d75.69903522635866!3d22.723888287670235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1715165029994!5m2!1sen!2sin",
    },
  },
};

export { locationData, locationListData };
