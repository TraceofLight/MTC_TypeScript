const HOST = "https://www.sangta.ch/api/v1";

const USER = "user/";

const urls = {
  accounts: {
    login: () => HOST + USER + "login/",
    logout: () => HOST + USER + "logout/",
    register: () => HOST + USER + "register/",
  },
};

export default urls;
