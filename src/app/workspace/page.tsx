// import { PlateEditor } from "@/components/Editor";
import WhiteBoard from "@/components/white-board";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="grid grid-cols-2 h-full">
      <div className="border-r h-full ">
        {/* <PlateEditor /> */}
        Editor
      </div>
      <div className="h-full">
        <WhiteBoard />
      </div>
    </div>
  );
};

export default page;
