/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */

export const httpConstants = {
  METHOD_TYPE: {
    POST: "POST",
    PUT: "PUT",
    GET: "GET",
    DELETE: "DELETE",
  },
  CONTENT_TYPE: {
    APPLICATION_JSON: "application/json",
    MULTIPART_FORM_DATA: "multipart/form-data",
    APPLICATION_FORM_URLENCODED: "application/x-www-form-urlencoded",
    IMAGE_PNG: "image/png",
  },
  DEVICE_TYPE: {
    WEB: "web",
  },
  API_END_POINT: {
    GET_PROJECTS: "/projects",
    GET_ACTIVATED_PROJECTS: "/activated-projects",
    GET_EARNINGS: "/earnings",
    GET_PROJECT_BY_ID: "/projects/",
    GET_TASK_BY_ID: "/tasks/",
    ACTIVATE_PROJECT: "/activate-project",
    VALIDATE_TASK: "/validate-task",
    CLAIM_REWARD: "/earnings",
    GET_CLAIM_REWARD: "/earnings/",
  },
};

export const cookiesConstants = {
  SET_CURRENT_TASK: "SET_CURRENT_TASK",
  SET_IS_ACTIVATED: "SET_IS_ACTIVATED",
  WALLET_DETAILS: "WALLET_DETAILS",
};

export const validationMessages = {
  TOAST_POSITION: "top-center",
  WALLET_NOT_FOUND: "Phantom extension not available",
  WALLET_CONNECTION_FAILED: "Failed to connect wallet",
  PROJECTS_FETCH_FAILED: "Failed to fetch projects",
  ACTIVATED_PROJECTS_FETCH_FAILED: "Failed to fetch activated projects",
  EARNING_FETCH_FAILED: "Failed to fetch earnings",
  PROJECT_DETAILS_FETCH_FAILED: "Failed to fetch project details",
  TASK_DETAILS_FETCH_FAILED: "Failed to fetch task details",
  ACTIVATE_PROJECT_FAILED: "Failed to activate the project, try again",
  VALIDATE_TASK_FAILED: "Failed to validate task, try again",
  VIDEO_DURATION_ERROR: "Watch the video to validate task",
  CLAIM_REWARD_ERROR: "Failed to claim reward",
  CLAIM_REWARD_TRANSACTION_ERROR: "Claim reward transaction failed",
  CLAIM_REWARD_INFO_ERROR: "Failed to fetch claimed reward information",
  TRANSACTION_HASH_ERROR: "Transaction hash error",
};

export const eventConstants = {
  SET_CURRENT_TASK: "SET_CURRENT_TASK",
  SET_IS_ACTIVATED: "SET_IS_ACTIVATED",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export const VIDEO_DOM_ID = "currentProjectVideoId";
export const TOKEN_AMOUNT_DECIMALS = "00000000";
export const REDIRECT_URL = "https://solscan.io/tx/";
export const STAKE_URL = "https://stake.runstake.com/";
export const FROM_REDIRECT_URL = "https://solscan.io/account/";

export const SOLANA_RPC_NETWORK = "https://api.devnet.solana.com";
export const TOKEN_TRANSFER_ADDRESS =
  "UTmJ2nZknP3LHBg9tXqiMWp5FpeNUAnXsKd9vT91G3B";

export const YOUTUBE_URL =
  "https://www.youtube.com/channel/UCF5Lu6CG3G3ZUYXru93fWOA";
export const DISCORD_URL = "https://discord.com/invite/V2f74X8Zrt";
export const TWITTER_URL = "https://twitter.com/runnode";
export const TELEGRAM_URL = "https://t.me/runnode";

export const TRANSACTION_ADDRESS_LENGTH = 88;
export const ALPHANUMERIC_REGEX = /^[a-z0-9]+$/i;
