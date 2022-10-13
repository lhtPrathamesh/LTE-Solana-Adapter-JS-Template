import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as solanaWeb3 from "@solana/web3.js";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";
import {
  validationMessages,
  TRANSACTION_ADDRESS_LENGTH,
  ALPHANUMERIC_REGEX,
} from "../../constants";

const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    top: 46,
  },
});

function ValidateTask({
  handleClose,
  open,
  handleTask,
  taskId,
  videoDuration,
  validateCurrentTask,
  activatedProjectId,
  currentTask,
}) {
  const classes = useStyles();
  const [address, setAddress] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [validateSuccess, setValidateSuccess] = useState(false);

  const handleNextTask = async () => {
    if (
      address.length === TRANSACTION_ADDRESS_LENGTH &&
      ALPHANUMERIC_REGEX.test(address)
    ) {
      const validateResponse = handleValidation();
      if (validateResponse) {
        setIsValidating(true);
        const response = await validateCurrentTask(
          taskId,
          address,
          videoDuration,
          activatedProjectId
        );
        if (response) {
          setIsValidating(false);
          setValidateSuccess(true);
        }
      } else {
        toast.error(validationMessages.TRANSACTION_HASH_ERROR, {
          duration: 4000,
          position: validationMessages.TOAST_POSITION,
        });
      }
    } else {
      return false;
    }
  };

  const getNextTask = () => {
    handleTask();
    handleClose();
  };

  const handleValidation = async () => {
    let connection = new solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl("mainnet-beta"),
      "confirmed"
    );
    let data = await connection.getConfirmedTransaction(
      "53xa8MvU2KRoxzoKfe2jnodLRveK47EYpTorn41Ga7GAzPbWpqwrz8pjNsRhAsSoHDzJAkNZL8NhB55zYCWE4XKU"
    );

    const signer = data.transaction._json.feePayer;

    if (signer === "CVtfFMVoNJoc1ESLDxuz4ttZxZXCWnQ51hwBWEj5fTFW") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Dialog
      onClose={(_, reason) => {
        if (reason !== "backdropClick") {
          handleClose();
        }
      }}
      aria-labelledby="simple-dialog-title"
      open={open}
      PaperProps={{
        style: { borderRadius: 12 },
      }}
      classes={{
        paper: classes.dialog,
      }}
      maxWidth="md"
      className="rounded-lg"
    >
      <div className="w-160 h-379px bg-white-100 px-27px py-21px">
        <div className="flex justify-between items-center mb-4.5">
          <span className="font-PoppinsSemiBold text-ft17 text-black-100">
            Validate Task
          </span>
          <img
            src="/images/close.png"
            alt=""
            className="cursor-pointer"
            onClick={() => (validateSuccess ? getNextTask() : handleClose())}
          />
        </div>
        <div className="mb-31px">
          <div>
            <span className="font-PoppinsRegular text-ft18 text-black-50">
              1. Open{" "}
              <span className="text-blue-250 cursor-pointer">
                www.pancakeswap.finance
              </span>{" "}
              and click on Trade.
            </span>
          </div>
          <div>
            <span className="font-PoppinsRegular text-ft18 text-black-50">
              2. Connect your wallet.
            </span>
          </div>
          <div>
            <span className="font-PoppinsRegular text-ft18 text-black-50">
              3. Make a Swap as explained in the video.
            </span>
          </div>
        </div>
        <div className="font-PoppinsRegular text-ft2 text-black-50 mb-3">
          Copy paste swap transaction address from{" "}
          <span className="text-blue-250 cursor-pointer">Solscan</span> and
          click Validate.
        </div>
        <div className="w-full h-47px border border-darkGrey-100 rounded-lg mb-21px">
          <input
            type="text"
            className="w-full h-full border-none outline-none p-2.5 font-PoppinsRegular text-ft4 text-black-50 rounded-lg"
            value={address}
            placeholder="Please enter transaction address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div
            className={`${validateSuccess ? `flex items-center` : `invisible`}`}
          >
            <img
              src="/images/checkGreen.svg"
              alt=""
              className="mr-2 w-21px h-21px"
            />
            <span className="font-PoppinsMedium text-ft18 text-green">
              Success! Task-{currentTask} Completed
            </span>
          </div>
          <div className="">
            {validateSuccess ? (
              <div
                className="w-213px h-42px rounded-lg bg-blue-250 flex items-center justify-center cursor-pointer"
                onClick={() => getNextTask()}
              >
                <span className="font-PoppinsSemiBold text-ft6 text-white-100">
                  Next Task
                </span>
              </div>
            ) : (
              <button
                disabled={!address ? true : false}
                className={
                  !address
                    ? "w-213px h-42px rounded-lg bg-blue-400 flex items-center justify-center cursor-pointer"
                    : "w-213px h-42px rounded-lg bg-blue-250 flex items-center justify-center cursor-pointer"
                }
                onClick={() => handleNextTask()}
              >
                <span className="font-PoppinsSemiBold text-ft6 text-white-100">
                  {isValidating ? (
                    <div>
                      <CircularProgress className="text-white-100 p-1" />
                    </div>
                  ) : (
                    "Validate Task"
                  )}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ValidateTask;
