import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    alignItems     : 'center',
    backgroundColor: 'white',
    flex           : 1,
    flexDirection  : 'column',
    justifyContent : 'flex-start',
  },
  currentBalanceText: {
    marginTop: 8,
  },
  productsListView: {
    height: '85%',
    width : '90%'
  },
  userInfo: {
    flexDirection : 'row',
    height        : '10%',
    justifyContent: 'space-between',
    paddingTop    : 10,
    width         : '90%'
  },
});

export default styles;
