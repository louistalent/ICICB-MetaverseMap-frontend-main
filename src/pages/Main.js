import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ChatButton from "../components/ChatBot";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/Build/build.loader.js",
    dataUrl: "build/Build/build.data",
    frameworkUrl: "build/Build/build.framework.js",
    codeUrl: "build/Build/build.wasm",
    streamingAssetsUrl: "build/StreamingAssets",
});

export default function Main() {
    const [sidebarFlag, setSidebarFlag] = useState(false);
    const [chatFlag, setChatFlag] = useState(false);

    useEffect(() => {
        unityContext.on("GameController", (message) => {
            try {
                console.log(message);
                // unityContext.send(
                //     "MenuManager",
                //     "RequestToken",
                //     JSON.stringify({
                //         token: token,
                //         amount: balance,
                //     })
                // );
            } catch (err) {
                console.log("error", err);
            }
        });
    }, []);

    return (
        <div
            className={
                sidebarFlag
                    ? "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar"
                    : "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
            }
        >
            <Header sidebarFlag={sidebarFlag} setSidebarFlag={setSidebarFlag} />
            <div className="app-main">
                <Sidebar />
                <div className="app-main__outer">
                    <div className="app-main__inner">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-card mb6 card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            ICICB Metaverse World Map
                                        </div>
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "80vh",
                                            }}
                                        >
                                            <Unity
                                                unityContext={unityContext}
                                                matchWebGLToCanvasSize={true}
                                                style={{width: "100%", height: "100%"}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChatButton chatFlag={chatFlag} setChatFlag={setChatFlag} />
        </div>
    );
}
