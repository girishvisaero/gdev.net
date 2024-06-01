"use client";

import { Excalidraw } from "@excalidraw/excalidraw";
import React from "react";

type Props = {};

const WhiteBoard = (props: Props) => {
  return (
    <div className="h-full">
      <Excalidraw />
    </div>
  );
};

export default WhiteBoard;
