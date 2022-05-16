import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, ListScreen, ProductDetailScreen } from "../screens";
import { ProductType } from "../redux/stateTypes";
import BackButton from "../components/BackButton";
import { LogoText } from "../components";

export type MainStackParamList = {
    Home: undefined;
    ProductDetail: { product: ProductType };
    List: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
    return (
        <Main.Navigator initialRouteName="Home">
            <Main.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Main.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
                options={{
                    headerTitle: () => <LogoText />,
                    headerLeft: () => <BackButton />,
                    headerBackVisible: false,
                }}
            />
            <Main.Screen
                name="List"
                component={ListScreen}
                options={{
                    headerTitle: () => <LogoText />,
                    headerLeft: () => <BackButton />,
                    headerBackVisible: false,
                }}
            />
        </Main.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
};

export default AppNavigator;
