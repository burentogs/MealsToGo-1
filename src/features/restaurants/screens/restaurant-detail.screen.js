import React, { useState, useContext } from "react";
import { ScrollView, TouchableOpacity, TextInput, View, Text, StyleSheet } from "react-native";
import { List, Divider } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { OrderButton } from "../components/restaurant-list.styles";
import { CartContext } from "../../../services/cart/cart.context";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);

  //-------//------//


  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Өглөөний хоол "
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Шарсан өндөгтэй талх" /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Жигнэсэн өндөг" /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Үдийн хоол"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Бургер" /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Сэндвич" /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Бууз" /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
          <Divider />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Оройн хоол"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Тойгны шөл " /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Өндөгтэй хуурга" /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Багц цуйван" /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
        </List.Accordion>
        <Divider />

        <List.Accordion
          title="Уух зүйл"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Сүүтэй цай" /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Хар цай" /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Үзэмний шүүс" /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Кола" /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}><List.Item title="Кофе" /></View>
            <Text style={styles.styletext}>Тоо:</Text>
            <TextInput style={styles.styleinp}>0</TextInput>
          </View>
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash-usd"
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Захиалах
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  styletext: {
    flex: 0.2, alignItems: 'center', textAlign: 'center', marginTop: 15
  },
  styleinp: {
    marginBottom: 10, marginTop: 10, borderRadius: 30, borderWidth: 2, borderColor: "#9b19e6", color: "#9b19e6", flex: 0.2, alignItems: 'center', textAlign: 'center', fontSize: 18
  },
});