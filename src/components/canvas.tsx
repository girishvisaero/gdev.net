"use client";
import React, { useEffect, useRef, useState } from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { useTheme } from "next-themes";

const Canvas = () => {
  const [whiteBoard, setWhiteBoard] = useState<any>();
  const { theme } = useTheme();

  const saveWhiteboard = () => {};

  return (
    <>
      <div className="h-full w-full">
        <Excalidraw
          theme={theme as "dark" | "light"}
          UIOptions={{
            canvasActions: {
              export: false,
              loadScene: false,
              // saveAsImage: false,
            },
          }}
          onChange={(excaliDrawElements, appState, files) => {
            // console.log(excaliDrawElements);
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
