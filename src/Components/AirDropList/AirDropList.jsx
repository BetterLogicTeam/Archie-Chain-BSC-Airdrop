import axios from "axios";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
export default function AirDropList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        let res = await axios.get(
          "https://tipcoin.betterlogics.tech/getAllAddress"
        );
        if (res.data.success) {
          console.log("getAllAddress", res.data);
          setUserList(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserDetails();
  }, []);

  const downloadExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(userList);
    XLSX.utils.book_append_sheet(wb, ws, "AirDrop List");
    XLSX.writeFile(wb, "airdrop_list.xlsx");
  };
  return (
    <div className="container">
      <h1 className="text-white text-center mt-3">Air Drop List </h1>
      <div className="table-responsive">
        <table class="table text-white mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Wallet Address</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((items, index) => {
              return (
                <>
                  <tr key={items}>
                    <th scope="row">{index + 1}</th>
                    <td>{items.walletAddress}</td>
                    <td>{items.points}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      {userList.length > 0 && (
        <button className="claim_btn" onClick={downloadExcel}>
          Download
        </button>
      )}
    </div>
  );
}
