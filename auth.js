// ====== Change these to your own ======
const AUTH = {
  ID: "admin",
  PASS: "1234"
};
// =====================================

const SESSION_KEY = "hisab_logged_in";

function isLoggedIn(){
  return sessionStorage.getItem(SESSION_KEY) === "1";
}

function requireLogin(){
  const path = location.pathname.toLowerCase();
  const isLoginPage = path.endsWith("login.html");

  if (isLoginPage) return;

  if (!isLoggedIn()){
    // go login, then return to current page
    const ret = encodeURIComponent(location.href);
    location.href = `login.html?return=${ret}`;
  }
}

function doLogin(id, pass){
  if (id === AUTH.ID && pass === AUTH.PASS){
    sessionStorage.setItem(SESSION_KEY, "1");
    return true;
  }
  return false;
}

function doLogout(){
  sessionStorage.removeItem(SESSION_KEY);
  location.href = "login.html";
}

// expose
window.HISAB_AUTH = { requireLogin, doLogin, doLogout, isLoggedIn };

// auto protect
requireLogin();
