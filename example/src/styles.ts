import { StyleSheet } from 'react-native';

export const pressStyle = ({ pressed }: { pressed: boolean }) => [
  styles.btn,
  {
    backgroundColor: pressed ? 'black' : 'red',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: 'red',
    height: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  labelBox: {
    color: 'black',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default styles;
