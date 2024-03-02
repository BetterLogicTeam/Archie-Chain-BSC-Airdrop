import React, { useEffect, useState } from "react";
import { loadWeb3 } from "../apis/api";
import logo from "../Assests/ARC.png";

import "./Header.css";
import { Link } from "react-router-dom";
import {
  Archie_token_abi,
  Archie_token_adress,
  airdrop,
  airdrop_ABI,
} from "../utilies/Contract";

function Header() {
  const [BtTxt, setBtTxt] = useState("Connect");
  const [owneraddress, setowneraddress] = useState(null);

  const getaccount = async () => {
    let acc = await loadWeb3();
    if (acc == "No Wallet") {
      // toast.error('please install metamask')
      setBtTxt("please install metamask");
    } else if (acc == "Wrong Network") {
      // toast.error('Wrong Network')
      setBtTxt("Wrong Network");
    } else {
      setBtTxt(acc);
      let myAcc =
        acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
      const web3 = window.web3;
      let contractOf = new web3.eth.Contract(airdrop_ABI, airdrop);
      let Isowner = await contractOf.methods.owner().call();
      setowneraddress(Isowner);
    }
  };
  useEffect(() => {
    getaccount();
  });
  return (
    <div className="Header_main">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center  ">
          <div className="logo">
            <img src={logo} style={{ width: "100px" }} alt="" />
          </div>
          <div className="logo">
            {owneraddress?.toLowerCase() == BtTxt?.toLowerCase() && (
              <Link
                to="/AirDropList"
                className="text-decoration-none fs-5 text-white me-5"
              >
                Airdrop
              </Link>
            )}

            <button className="Header_btn">
              {BtTxt?.substring(0, 4) +
                "..." +
                BtTxt?.substring(BtTxt?.length - 4)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
