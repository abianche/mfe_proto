import React from "react";
import * as R from "ramda";

export default function RemoteButton() {
  const arr = [1, 2, 3];
  const sum = R.sum(arr); // 6

  return <button>Sum is {sum}</button>;
}
