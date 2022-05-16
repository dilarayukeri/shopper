import React from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

import LocalizationProvider from "./LocalizationProvider";
import store from "../redux/configureStore";

// Types
interface ProviderPropType {
    children: JSX.Element;
}

const RootProvider = ({ children }: ProviderPropType) => (
    <Provider store={store}>
        <LocalizationProvider>
            <SafeAreaProvider>{children}</SafeAreaProvider>
        </LocalizationProvider>
    </Provider>
);

export default RootProvider;
