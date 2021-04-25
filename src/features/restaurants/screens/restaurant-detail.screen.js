import React, { useState, useContext } from "react";
import { ScrollView, TouchableOpacity, TextInput, View, Text, StyleSheet, Button } from "react-native";
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
  const onNemeh = (foodname, foodprice) => {
    addToCart({ item: foodname, price: foodprice }, restaurant);
  }

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
            <View style={{ flex: 0.8 }}>
              <List.Item title="Гоймон" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Гоймон", 1500)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
          </View>

          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}>
              <List.Item title="Чанасан өндөг" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Чанасан өндөг", 1000)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
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
            <View style={{ flex: 0.8 }}>
              <List.Item title="Бургер" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Бургер", 2500)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
          </View>

          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}>
              <List.Item title="Сэндвич" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Сэндвич", 2000)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}>
              <List.Item title="Бууз" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Бууз", 1500)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
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
            <View style={{ flex: 0.8 }}>
              <List.Item title="Тойгны шөл" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Тойгны шөл", 6500)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}>
              <List.Item title="Өндөгтэй хуурга" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Өндөгтэй хуурга", 5500)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}>
              <List.Item title="Багц цуйван" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Багц цуйван", 7500)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
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
            <View style={{ flex: 0.8 }}>
              <List.Item title="Сүүтэй цай" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Сүүтэй цай", 500)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}>
              <List.Item title="Хар цай" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Хар цай", 500)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}>
              <List.Item title="Үзэмний шүүс" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Үзэмний шүүс", 1000)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}>
              <List.Item title="Кола (Жижиг)" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Кола (Жижиг)", 2000)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
          </View>
          <Divider />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.8 }}>
              <List.Item title="Кофе" />
            </View>
            <TouchableOpacity style={styles.buttons}>
              <Button title="нэмэх" onPress={() => onNemeh("Кофе", 1000)} color="#5D6CC6" style={{ color: "purple", fontSize: 18 }} />
            </TouchableOpacity>
          </View>
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cart"
          mode="contained"
          onPress={() => {
            navigation.navigate("Checkout");
          }}
        >
          Захиалах
        </OrderButton>
      </Spacer>
    </SafeArea >
  );
};

const styles = StyleSheet.create({
  styletext: {
    flex: 0.2,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 15
  },
  styleinp: {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#9b19e6",
    color: "#9b19e6",
    flex: 0.2,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18
  },
  buttons: {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 30,
    borderColor: "#9b19e6",
    color: "#9b19e6",
    flex: 0.3,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginRight: 10
  },
});