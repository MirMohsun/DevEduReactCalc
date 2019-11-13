import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  number: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#D5D8DC',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  result: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D5D8DC'
  },
  btnstl: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'

  },
  btntxt: {
    fontSize: 40,
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#000000'
  },
  numbers: {
    flex: 3,
    color: '#FDFEFE',
    backgroundColor: '#F39C12',
  },
  resultText: {
    fontSize: 30,
    color: 'black',
  },
  numberText: {
    fontSize: 40,
    color: 'black',
  },
  optxt:{
    color: 'red',
    fontSize: 35
  }
})