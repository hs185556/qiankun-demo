import request from "@/utils/request";
import axios from "axios";

const upmHeader = {
  "Application-Token": "XZ004",
  projectId: "1767079083532177408",
};

const upmGetManage = (url, params, data) => {
  const token = localStorage.getItem("main_token");
  return request({
    url: "" + url,
    params,
    headers: {
      ...upmHeader,
      sso_session_id2: token,
      userId: token.split("_")[0],
    },
    ...data,
  });
};

const upmPostManage = (url, data, showCode = false) => {
  const token = localStorage.getItem("main_token");
  return request({
    url: "" + url,
    headers: {
      ...upmHeader,
      sso_session_id2: token,
      userId: token.split("_")[0],
    },
    method: "POST",
    data,
    showCode,
  });
};

const upmPutManage = (url, data, showCode = false) => {
  const token = localStorage.getItem("main_token");
  return request({
    url: "" + url,
    headers: {
      ...upmHeader,
      sso_session_id2: token,
      userId: token?.split("_")[0],
    },
    method: "PUT",
    data,
    showCode,
  });
};

export const logoinOut = () => upmGetManage("/upm-api/web/logout");

export const upmLogin = (data) => {
  return axios({
    url: "" + `/upm-api/web/login?projectId=${upmHeader.projectId}`,
    method: "post",
    data,
    headers: {
      ...upmHeader,
    },
  }).then((res) => {
    return Promise.resolve(res.data);
  });
};
