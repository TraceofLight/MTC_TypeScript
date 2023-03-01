const HOST = process.env.REACT_APP_BASE_URL;

const USER = "user/";

const path = {
  accounts: {
    login: () => HOST + USER + "login/",
    logout: () => HOST + USER + "logout/",
    register: () => HOST + USER + "register/",
  },
};

export default path;
