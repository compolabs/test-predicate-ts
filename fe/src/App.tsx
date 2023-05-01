import React from "react";
// import { Wallet } from "fuels";
import { PredicateExampleAbi__factory } from "./types";

function App() {
  // const wallet = Wallet.fromAddress(
  //   "fuel1seq5y87rxtzjvwws87jcnqqtykh3vx48wz72w5am09k6lqvvcmgq86fnx2"
  // );
  const predicate = PredicateExampleAbi__factory.createInstance();
  console.log("predicate", predicate);

  return <div className="App">Fuel app</div>;
}

export default App;
