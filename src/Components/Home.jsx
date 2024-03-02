import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Get_Data from "./Get_Data3/Get_Data_Multisend3";

export default function Home() {
  return (
    <div>
      <div className="container">
        <Tabs
          defaultActiveKey="Direct"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="Direct" title="Realspad Token Airdrop">
            <Get_Data />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
