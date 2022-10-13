import { web3 } from "@project-serum/anchor";
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection, PublicKey, Keypair } from "@solana/web3.js";
import clientAccount from "./lteClient.json";
import { Buffer } from "buffer";
import { SOLANA_RPC_NETWORK, TOKEN_TRANSFER_ADDRESS } from "../constants";

const transferToken = async (to, amount) => {
  let clientAccountKeypair = await createKeypairFromFile(
    __dirname + "/lteClient.json"
  );

  // Connect to cluster
  const network = SOLANA_RPC_NETWORK;
  const connection = new Connection(network, "processed");
  // Construct wallet keypairs
  let fromWallet = clientAccountKeypair;
  const toWallet = new web3.PublicKey(to);

  let myMint = new web3.PublicKey(TOKEN_TRANSFER_ADDRESS);
  let myToken = new Token(connection, myMint, TOKEN_PROGRAM_ID, fromWallet);

  // Create associated token accounts for my token if they don't exist yet
  let fromTokenAccount = await myToken.getOrCreateAssociatedAccountInfo(
    fromWallet.publicKey
  );

  let toTokenAccount = await myToken.getOrCreateAssociatedAccountInfo(toWallet);

  // Add token transfer instructions to transaction
  let transaction = new web3.Transaction().add(
    await Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      fromTokenAccount.address,
      toTokenAccount.address,
      fromWallet.publicKey,
      [],
      Number(amount)
    )
  );

  // Sign transaction, broadcast, and confirm
  let signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [fromWallet]
  );
  return signature;
};

const createKeypairFromFile = (path) => {
  return Keypair.fromSecretKey(Buffer.from(clientAccount));
};

export default {
  transferToken,
};
