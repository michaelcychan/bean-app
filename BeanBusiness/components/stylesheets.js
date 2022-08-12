import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#0BA8D3',
  },
  title: {
    alignSelf: 'center',
    fontSize: 36,
    padding: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    padding: 5,
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 240,
    backgroundColor: 'white',
    color: '#50009E',
  },
  input_drinker: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 240,
    backgroundColor: 'white',
    color: '#50009E',
    alignSelf: 'center',
  },
  hoursContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  hoursInput: {
    flex: 1,
    marginRight: 50,
    height: 30,
    borderWidth: 1,
    width: 130,
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#50009E',
  },
  hoursLabel: {
    flex: 1,
    marginLeft: 50,
    fontWeight: 'bold',
  },
  homeImage: {
    height: 300,
    width: 300,
    padding: 10,
  },
  image: {
    height: 200,
    width: 200,
    padding: 10,
  },
  smallImage: {
    height: 140,
    width: 140,
  },
  logo: {
    height: 80,
    width: 80,
    padding: 5,
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: '#7C00F5',
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
    borderColor: '#7C00F5',
  },
  secondaryButtonText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#7C00F5',
  },
  beanButton: {
    width: 180,
    alignItems: 'center',
    backgroundColor: '#7C00F5',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  details: {
    justifyContent: 'center',
    width: 320,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7C00F5',
    marginBottom: 20,
    padding: 20,
  },
  detailsText: {
    marginLeft: 20,
    padding: 2,
  },
  openingHoursText: {
    marginLeft: 20,
    fontSize: 12,
  },
  homeScreenContainer: {
    flex: 2,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#0BA8D3',
    alignSelf: 'center'
  },
  searchBar: {
    flex: 1,
    marginBottom: 15,
  },
  cameracontainer: {
    flex: 0.5,
    alignItems: 'center',
    alignSelf: 'center',
    margin: 1,
    padding: 1,
  },
});
