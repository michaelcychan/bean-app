import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
  },
  openingHoursContainer: {
    flex: 1,
    backgroundColor: '#eaeaea',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 36,
    padding: 10,
  },
  subtitle: {
    fontSize: 24,
    padding: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 240,
  },
  hoursContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  hoursInput: {
    flex: 1,
    height: 30,
    borderWidth: 1,
    width: 130,
    textAlign: 'center',
  },
  hoursLabel: {
    flex: 1,
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
