// import { PlateEditor } from "@/components/Editor";
import dynamic from "next/dynamic";
import React from "react";
const Canvas = dynamic(() => import("@/components/canvas"), {
  ssr: false,
});
const MDXEditor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});
type Props = {};

const page = (props: Props) => {


  return (
    <div className="grid grid-cols-2 h-full overflow-hidden">
      <div className="border-r h-full dark:bg-black min-h-full">
        {/* <PlateEditor /> */}
        <MDXEditor />
      </div>
      <div className="h-full ">
        <Canvas />
      </div>
    </div>
  );
};

export default page;
