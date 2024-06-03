// import { PlateEditor } from "@/components/Editor";
import dynamic from "next/dynamic";
import React from "react";
const Canvas = dynamic(() => import("@/components/canvas"), {
  ssr: false,
});
type Props = {};

const page = (props: Props) => {
  return (
    <div className="grid grid-cols-2 h-full">
      <div className="border-r h-full ">
        {/* <PlateEditor /> */}
        Editor
      </div>
      <div className="h-full">
        <Canvas />
      </div>
    </div>
  );
};

export default page;
