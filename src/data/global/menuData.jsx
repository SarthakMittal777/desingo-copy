import logoDark from "../../assets/images/shared/desktop/logo-dark.svg";
import logoLight from "../../assets/images/shared/desktop/logo-light.svg";
import facebook from "../../assets/images/shared/desktop/icon-facebook.svg";
import whatsapp from "../../assets/images/shared/desktop/icon-whatsapp.svg";
import telegram from "../../assets/images/shared/desktop/icon-telegram.svg";
import youtube from "../../assets/images/shared/desktop/icon-youtube.svg";
import twitter from "../../assets/images/shared/desktop/icon-twitter.svg";
import pinterest from "../../assets/images/shared/desktop/icon-pinterest.svg";
import instagram from "../../assets/images/shared/desktop/icon-instagram.svg";

const menuData = {
  header: {
    headerLogo: logoDark,
    headerLogoAlt: "growsoc web agency",
    label: "visit homepage",
  },
  footer: {
    footerLogo: logoLight,
    footerLogoAlt: "growsoc",
    label: "go back to homepage",
  },
  homeLink: "/",
  address: {
    office: "Growsoc Central Location",
    street: "Anandapur, Kolkata",
    city: "West Bengal 700107",
  },
  contact: {
    title: "Contact Us",
    phone: "+91 80939 09455",
    phoneLink: "tel:+918093909455",
    phoneLabel: "call us via our official number",
    email: "growsoctechnologies@gmail.com",
    emailLink: "mailto:growsoctechnologies@gmail.com",
    emailLabel: "send us an email",
  },
  social: [
    // {
    //   label: "follow us on facebook",
    //   icon: facebook,
    //   link: "https://facebook.com.growsoc",
    // },
    {
      label: "contact us on whatsapp",
      icon: whatsapp,
      link: "https://wa.me/+918093909455",
    },
    {
      label: "contact us on telegram",
      icon: telegram,
      link: "https://telegram.me/+918093909455",
    },
    {
      label: "subscribe to our youtube channel",
      icon: youtube,
      link: "https://www.youtube.com/@growsoc",
    },
    // {
    //   label: "follow us on twitter",
    //   icon: twitter,
    //   link: "https://twitter.com.growsoc",
    // },
    // {
    //   label: "join us on pinterest",
    //   icon: pinterest,
    //   link: "https://pinterest.com.growsoc",
    // },
    {
      label: "follow us on instagram",
      icon: instagram,
      link: "https://instagram.com/growsoctech",
    },
  ],
  menu: [
    {
      title: "home",
      link: "/",
      label: "visit home page",
    },
    {
      title: "about",
      link: "/about",
      label: "visit about page",
    },
    {
      title: "locations",
      link: "/locations",
      label: "visit locations page",
    },
    {
      title: "contact",
      link: "/contact",
      label: "visit contact page",
    },
  ],
};

export default menuData;
