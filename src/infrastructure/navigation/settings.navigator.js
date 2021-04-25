import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { OrderHistoryScreen } from "../../features/settings/screens/order.history.screen";
import { PaymentScreen } from "../../features/settings/screens/payment.screen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Таалагдсан" component={FavouritesScreen} />
      <SettingsStack.Screen name="Өмнөх захиалгууд" component={OrderHistoryScreen} />
      <SettingsStack.Screen name="Төлөлтийн түүх" component={PaymentScreen} />
    </SettingsStack.Navigator>
  );
};
