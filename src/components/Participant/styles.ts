import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f1e25',
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    color: '#fff'
  },
  btn: {
    backgroundColor: '#e23c44',
    borderRadius: 5,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: 24
  },
})