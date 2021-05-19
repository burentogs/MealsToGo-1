import React from "react";
import { color } from "react-native-reanimated";
import { StyleSheet, View } from 'react-native';
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <Text style={styles.red} variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'white',
    width: 260, height: 50, backgroundColor: '#696ac3', textAlign: 'center', padding: 15, borderRadius: 20
  },
});