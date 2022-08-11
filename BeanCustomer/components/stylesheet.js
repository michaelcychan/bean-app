import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  homeImage: {
    height: 160,
    width: 160,
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 40,
  },
  image: {
    height: 80,
    width: 80,
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  card_container: {
    alignItems: 'center',

  },
  card_template: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: 250,
    height: 250,
    margin: 10
  },
  card_title: {
    left: 10,
    color: "white",
    fontWeight: 'bold',
  },
  card_beanCount: {
    left: 190,
    bottom: 17,
    color: "white",
    fontWeight: 'bold',
  },
  text_container:{
    position: "absolute",
    width: 248,
    height: 30,
    bottom:0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10
  },
  card_image: {
    left: 24,
    top: 10,
    align: 'top',
    width: 200,
    height: 200,
    borderRadius : 10, 
  },
  shop_info: {
    width: '94%', 
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 50,
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
    zIndex: 1,
  },
});