import { httpService } from "../utility/httpService";
import { httpConstants } from "../constants";

async function getHeaders() {
  return {
    "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
  };
}

const getProjects = async (requestData) => {
  let url =
    process.env.REACT_APP_COURSES_SERVICE_URL +
    httpConstants.API_END_POINT.GET_PROJECTS +
    `?skip=${requestData.skip}&limit=${
      requestData.limit
    }&project=${requestData.project.join(",")}&type=${requestData.type.join(
      ","
    )}`;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    await getHeaders(),
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
};

const getActivatedProjectsByAddress = async (requestData) => {
  let url =
    process.env.REACT_APP_COURSES_SERVICE_URL +
    httpConstants.API_END_POINT.GET_ACTIVATED_PROJECTS +
    "/" +
    requestData.address;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    await getHeaders(),
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
};

const getEarningsByAddress = async (requestData) => {
  let url =
    process.env.REACT_APP_COURSES_SERVICE_URL +
    httpConstants.API_END_POINT.GET_EARNINGS +
    "/" +
    requestData.address;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    await getHeaders(),
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
};

const getProjectById = async (requestData) => {
  let url =
    process.env.REACT_APP_COURSES_SERVICE_URL +
    httpConstants.API_END_POINT.GET_PROJECT_BY_ID +
    requestData.projectId;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    await getHeaders(),
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
};

const getTaskById = async (requestData) => {
  let url =
    process.env.REACT_APP_COURSES_SERVICE_URL +
    httpConstants.API_END_POINT.GET_TASK_BY_ID +
    requestData.taskId;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    await getHeaders(),
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
};

const activateProject = async (requestData) => {
  let url =
    process.env.REACT_APP_COURSES_SERVICE_URL +
    httpConstants.API_END_POINT.ACTIVATE_PROJECT;

  return httpService(
    httpConstants.METHOD_TYPE.POST,
    await getHeaders(),
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
};

const validateTask = async (requestData) => {
  let url =
    process.env.REACT_APP_COURSES_SERVICE_URL +
    httpConstants.API_END_POINT.VALIDATE_TASK;

  return httpService(
    httpConstants.METHOD_TYPE.PUT,
    await getHeaders(),
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
};

const claimReward = async (requestData) => {
  let url =
    process.env.REACT_APP_COURSES_SERVICE_URL +
    httpConstants.API_END_POINT.CLAIM_REWARD;

  return httpService(
    httpConstants.METHOD_TYPE.POST,
    await getHeaders(),
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
};

const getClaimedRewards = async (requestData) => {
  let url =
    process.env.REACT_APP_COURSES_SERVICE_URL +
    httpConstants.API_END_POINT.GET_CLAIM_REWARD +
    requestData.address;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    await getHeaders(),
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
};

export default {
  getProjects,
  getActivatedProjectsByAddress,
  getEarningsByAddress,
  getProjectById,
  getTaskById,
  activateProject,
  validateTask,
  claimReward,
  getClaimedRewards,
};
