import { JSEncrypt } from "jsencrypt";

export const setEncrypt = (str) => {
  const jsencrypt = new JSEncrypt({});
  const key = `-----BEGIN PUBLIC KEY-----
    MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgH9RB1AJw1b5f1eE52+icZplN40I
    eAooLdn9zb2tJCHmUQuFHaMAgUGTlrMYstjjy5MMvteZ3L0LmJd9g9Czyp2PQblk
    WEATn3YA9G00DiEgWJZ5cc7BFrLHIbFqSK8+BBFxGcFHhD2gvp62OaJPTkRvYgjv
    r+TvVdvVRo3DPT/rAgMBAAE=
    -----END PUBLIC KEY-----`;
  jsencrypt.setPublicKey(key);
  return jsencrypt.encrypt(str);
};

export const hasToken = () => localStorage.getItem("main_token");
