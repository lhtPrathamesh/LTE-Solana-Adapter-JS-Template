import { eventConstants } from "../constants";

export const handleCurrentTask = (data) => ({
  type: eventConstants.SET_CURRENT_TASK,
  payload: data,
});

export const handleActiveWallet = (data) => ({
  type: eventConstants.SET_IS_ACTIVATED,
  payload: data,
});

export const handleLogin = (data) => ({
  type: eventConstants.LOGIN,
  payload: data,
});

export const handleLogout = (data) => ({
  type: eventConstants.LOGOUT,
  payload: data,
});
