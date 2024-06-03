"use client";
import React, { useEffect, useRef, useState } from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";

const Canvas = () => {
  const [whiteBoard, setWhiteBoard] = useState<any>();

  const saveWhiteboard = () => {};

  return (
    <>
      <div className="h-full w-full">
        <Excalidraw
          theme="dark"
          UIOptions={{
            canvasActions: {
              export: false,
              loadScene: false,
              // saveAsImage: false,
            },
          }}
          onChange={(excaliDrawElements, appState, files) => {
            console.log(excaliDrawElements);
          }}
        >
          <MainMenu>
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.Help />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>
          <WelcomeScreen>
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.ToolbarHint />
            <WelcomeScreen.Hints.HelpHint />
          </WelcomeScreen>
        </Excalidraw>
      </div>
    </>
  );
};

export default Canvas;
