import { cookiesConstants, eventConstants } from "../constants";
import { sessionManager } from "../managers/sessionManager";

const walletDetails = sessionManager.getDataFromCookies(
  cookiesConstants.WALLET_DETAILS
);

let initialState = {
  isLoggedIn: false,
  loginFailure: null,
  deviceId: null,
  sessionToken: null,
  loading: false,
  isForgotPasswordSuccess: false,
  walletDetails: {
    address: walletDetails?.address ? walletDetails?.address : null,
  },
};
export default function user(state = initialState, action) {
  switch (action.type) {
    case eventConstants.LOGIN:
      sessionManager.setDataInCookies(
        action.payload ? action.payload : state.walletDetails,
        cookiesConstants.WALLET_DETAILS
      );
      return {
        ...state,
        walletDetails: action.payload,
      };

    case eventConstants.LOGOUT:
      sessionManager.removeDataFromCookies(cookiesConstants.WALLET_DETAILS);
      return {
        ...state,
        walletDetails: action.payload,
      };

    default:
      return state;
  }
}
