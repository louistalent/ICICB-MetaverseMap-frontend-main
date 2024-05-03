import React, { useState, useEffect } from "react";
import { useWallet } from "use-wallet";
import { useDispatch, useSelector } from "react-redux";

export default function Header(props) {
    const wallet = useWallet();
    const dispatch = useDispatch();
    const { sidebarFlag, setSidebarFlag } = props;
    const [mobileFlag, setMobileFlag] = useState(false);
    const auth = useSelector((state) => state.auth.userAddress);

    var styleAddress = wallet.account
        ? wallet.account.slice(0, 4) + "..." + wallet.account.slice(-4)
        : "";

    useEffect(() => {
        if (wallet.status === "error") {
            alert("Please connect to correct chain");
        }
    }, [wallet.status]);

    useEffect(() => {
        if (wallet.account !== null) {
            dispatch({
                type: "SET_ADDRESS",
                payload: wallet.account,
            });
        }
    }, [wallet.account]);

    const handleConnect = async () => {
        if (wallet.status !== "connected") {
            wallet.connect();
        }
    };

    const disconnect = () => {
        if (wallet.status === "connected") {
            wallet.reset();

            dispatch({
                type: "SET_ADDRESS",
                payload: "",
            });
        }
    };

    return (
        <>
            <div className="app-header header-shadow">
                <div className="app-header__logo">
                    <div className="logo-src"></div>
                    <div className="header__pane ml-auto">
                        <div>
                            <button
                                type="button"
                                className="hamburger close-sidebar-btn hamburger--elastic"
                                data-classname="closed-sidebar"
                                onClick={() => setSidebarFlag(!sidebarFlag)}
                            >
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div style={{ position: "relative" }}>
                        <button
                            type="button"
                            className="hamburger hamburger--elastic mobile-toggle-nav"
                            onClick={() => setMobileFlag(!mobileFlag)}
                        >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                        <div
                            className={
                                mobileFlag
                                    ? "dropdown-menu show"
                                    : "dropdown-menu"
                            }
                        >
                            <button type="button" className="dropdown-item">
                                Option1
                            </button>
                            <button type="button" className="dropdown-item">
                                Option2
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-header__content">
                    <div className="app-header-right">
                        {auth && wallet.status === "connected" ? (
                            <button
                                className="btn btn-primary"
                                onClick={disconnect}
                            >
                                {styleAddress}
                            </button>
                        ) : (
                            <span>
                                {wallet.status === "connecting" ? (
                                    <button className="btn btn-primary">
                                        Connecting...
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleConnect}
                                    >
                                        Connect Wallet
                                    </button>
                                )}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
