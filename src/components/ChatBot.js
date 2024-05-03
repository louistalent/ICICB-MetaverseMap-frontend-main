import React from "react";

export default function ChatBot(props) {
    const { chatFlag, setChatFlag } = props;

    const handleChat = () => {
        chatFlag ? setChatFlag(false) : setChatFlag(true);
    };

    return (
        <div
            className={
                chatFlag
                    ? "ui-theme-settings settings-open"
                    : "ui-theme-settings"
            }
        >
            <button
                type="button"
                id="TooltipDemo"
                className="btn-open-options btn btn-warning"
                onClick={handleChat}
            >
                <i className="fa fa-cog fa-w-16 fa-spin fa-2x"></i>
            </button>
            <div className="theme-settings__inner">
                <div className="scrollbar-container">
                    <div className="theme-settings__options-wrapper">
                        <h3 className="themeoptions-heading">User Options</h3>
                        <div className="p-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left mr-3">
                                                <button
                                                    type="button"
                                                    className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-lg switch-header-cs-className"
                                                >
                                                    Buy NFT land
                                                </button>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">
                                                    NFT land Buy
                                                </div>
                                                <div className="widget-subheading">
                                                    you can buy any land in
                                                    metaverse map...
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
