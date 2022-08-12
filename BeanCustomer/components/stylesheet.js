import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

const primary = '#1C24F5'
const secondary = '#0BA8D3'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0BA8D3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollcontainer: {
    backgroundColor: '#0BA8D3',
    flex: 1,
  },
  title: {
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 24,
    padding: 5,
    color: 'white',
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: primary,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  primaryButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  secondaryButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: primary,
  },
  secondaryButtonText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: primary,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 3,
    paddingHorizontal: 30
  },
  buttontext:{
    fontWeight: 'bold'
  },
  homeImage: {
    marginTop: 100,
    height: 300,
    width: 300,
  },
  image: {
    height: 200,
    width: 200,
    alignItems: 'center',
    padding: 10,
    marginTop: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: primary,
    padding: 10,
    width: 240,
    backgroundColor: 'white',
    color: primary,
  },
  // input: {
  //   height: 40,
  //   width: 240,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  //   borderWidth: 2,
  //   placeholderTextColor: '#000000'
  // },
  card_container: {
    alignItems: 'center',

  },
  card_template: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: 250,
    height: 250,
    margin: 10,
    backgroundColor: "white"
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
    height: 600,
    position: 'absolute',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
    zIndex: 1,
    padding: 10
  },
  shopBeanCount: {
    marginRight: 10,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  shopInfoText: {
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: 10,
    fontSize: 28,
  },
  shopLink: {
    bottom: 10,
    marginLeft: 10,
    color: '#0000EE',
    textDecorationLine: 'underline',
  },
  freeCoffee:{
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 80,
    alignItems: 'center'
  },
  freeCoffeeText: {
    fontWeight: 'bold'
  },
  back_button:{
    position: 'absolute',
    left: 25,
    top: 25,
    alignItems: 'center',
    backgroundColor: '#a7b2c2',
    padding: 7,
    borderRadius: 10,
    borderWidth: 1,
  }
});