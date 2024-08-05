import { environment } from "../../environments/environments";
import { Params } from "../common/interfaces/params";

// URI for google oauth2 auth code
const GOOGLEOAUTH2URL = "https://accounts.google.com/o/oauth2/v2/auth?";

// Parameters used to exchange for an authorization code from google
const googleAuthConfig : Params = {
  client_id: environment.googleClientId,
  redirect_uri: environment.authRedirectUri,
  response_type: 'code',
  scope: 'email',
  access_type: 'offline',
  state: ''
}

// Makes a string of random characters of specified length
function makeState(length:number) {
  let state = '';
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < length; i++) {
    state += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Store state in localstorage
  localStorage.setItem("state", state);

  return state;
}

// Transform object pairing of 'key : value' into valid query string params
function objectToQueryString(obj: Params) {
  return Object.keys(obj).map(
    key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
    }
  ).join("&");
}

export function getGoogleAuthCodeQueryString() {
  googleAuthConfig['state'] = makeState(16);

  return GOOGLEOAUTH2URL + objectToQueryString(googleAuthConfig);
}