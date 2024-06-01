import WorkspaceHeader from "@/components/workspace-header";
import React from "react";

const WorkspaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="p-2 h-screen">
      <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl h-full">
        {/* <WorkspaceHeader /> */}
        <div className="px-2 h-full">{children}</div>
      </div>
    </section>
  );
};

export default WorkspaceLayout;
