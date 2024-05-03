import { Provider } from "react-redux";
import { NotificationContainer } from "react-notifications";
import { UseWalletProvider } from "use-wallet";
import store from "./store";
import Routes from "./routes";

import "react-notifications/lib/notifications.css";

function App() {
    return (
        <UseWalletProvider
            chainId={4002}
            connectors={{
                // This is how connectors get configured
                portis: { dAppId: "ICICB Metaverse" },
            }}
        >
            <Provider store={store}>
                <Routes />
                <NotificationContainer />
            </Provider>
        </UseWalletProvider>
    );
}

export default App;
