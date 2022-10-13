import "./App.css";
import { useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Program, web3, AnchorProvider } from "@project-serum/anchor";
import * as anchor from "@project-serum/anchor";
import contractAbi from "./nft_metadata_lte.json";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import {
  WalletMultiButton,
  useWalletModal,
} from "@solana/wallet-adapter-react-ui";

function MintNFT() {
  const { publicKey } = useWallet();
  useEffect(() => {
    setwalletAddress(publicKey);
  }, []);

  const [walletAddress, setwalletAddress] = useState(publicKey);

  const anchorWallet = useAnchorWallet();
  // Custom Connect Button
  const { setVisible } = useWalletModal();

  const connectWallet = async () => {
    const wallet = await window.phantom.solana.connect();
    setwalletAddress(wallet.publicKey);
    setVisible(true);
  };

  //   Mint Function
  const mintNFTLogic = async () => {
    const provider = await getProvider();
    if (!provider) {
      console.log("Provider is null");
      return "Provider is null";
    }

    const testNftTitle = "Mac M7";
    const testNftSymbol = "M7";
    const testNftUri =
      "https://raw.githubusercontent.com/lhtPrathamesh/Metadata/main/metadata.json";

    const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
      "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
    );

    const mintKeypair = await web3.Keypair.generate();

    const metadataAddress = (
      await web3.PublicKey.findProgramAddress(
        [
          Buffer.from("metadata"),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          mintKeypair.publicKey.toBuffer(),
        ],
        TOKEN_METADATA_PROGRAM_ID
      )
    )[0];

    const masterEditionAddress = (
      await web3.PublicKey.findProgramAddress(
        [
          Buffer.from("metadata"),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          mintKeypair.publicKey.toBuffer(),
          Buffer.from("edition"),
        ],
        TOKEN_METADATA_PROGRAM_ID
      )
    )[0];

    const tokenAddress = await anchor.utils.token.associatedAddress({
      mint: mintKeypair.publicKey,
      owner: walletAddress,
    });

    let collectionKey = new PublicKey(
      "AgPqo93u6aBDLfUeYhkwzfSC1wcbTAUeo6V8ff3Yb15X"
    );
    // let colKey = new PublicKey("CXLhoux2S2mQ64pTiKC9mURv7Kj6z27rpabsQYjwandn");

    const stringAbi = JSON.stringify(contractAbi);
    const jsonAbi = JSON.parse(stringAbi);

    const program = new Program(
      jsonAbi,
      contractAbi.metadata.address,
      provider
    );

    try {
      /*interact with the program via rpc*/
      const transaction = await program.methods
        .mint(collectionKey, testNftTitle, testNftSymbol, testNftUri)
        .accounts({
          masterEdition: masterEditionAddress,
          metadata: metadataAddress,
          mint: mintKeypair.publicKey,
          tokenAccount: tokenAddress,
          mintAuthority: walletAddress,
          tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
        })
        .signers([mintKeypair])
        .rpc();

      console.log("transaction --> ", transaction);
    } catch (e) {
      console.log("error in catch block", e);
    }
  };

  const getProvider = () => {
    if (!anchorWallet) {
      return null;
    }
    const network = "https://api.devnet.solana.com";
    const connection = new Connection(network, "processed");
    const provider = new AnchorProvider(connection, anchorWallet, {
      preflightCommitment: "processed",
    });
    return provider;
  };

  return (
    <div className="App">
      <header className="App-header">
        <WalletMultiButton />
        <button className="button" onClick={() => mintNFTLogic()}>
          Mint NFT
        </button>
        {/* <button className="button" onClick={() => connectWallet()}>
          connectWallet
        </button> */}
        <div className="w-40 h-[160px] bg-blue-50 rounded-lg mt-4 shadow-md shadow-grey-50"></div>
      </header>
    </div>
  );
}

export default MintNFT;
