import favicon from './extensions/favicon.ico'
import logo from "./extensions/logo.png";

const config = {
  auth: {
    logo,
  },
  head: {
    favicon: favicon,
  },

  menu: {
    logo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "Workplace",

      "Auth.form.welcome.title": "Welcome to Celios Dashboard",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  theme: {
    colors: {
      primary100: "#eafbe7",
      primary200: "#c6f0c2",
      primary500: "#5cb176",
      primary600: "#328048",
      primary700: "#2f6846",
      buttonPrimary100: "#eafbe7",
      buttonPrimary200: "#c6f0c2",
      buttonPrimary500: "#5cb176",
      buttonPrimary600: "#328048",
      buttonPrimary700: "#2f6846",
      danger700: "#b72b1a",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
  document.title = "Celios Admin";
};

export default {
  config,
  bootstrap,
};
