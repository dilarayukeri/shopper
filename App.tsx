/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from "react";
import RootProvider from "./src/providers/RootProvider";
import SplashScreen from "react-native-splash-screen";
import AppNavigator from "./src/navigation/Router";

const App = () => {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 3000);
    }, []);

    return (
        <RootProvider>
            <AppNavigator />
        </RootProvider>
    );
};

export default App;
