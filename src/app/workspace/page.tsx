// import { PlateEditor } from "@/components/Editor";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="grid grid-cols-2 h-full">
      <div className="border-r h-full">
        {/* <PlateEditor /> */}
        Editor
      </div>
      <div className="h-full">page 2</div>
    </div>
  );
};

export default page;
