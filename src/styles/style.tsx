import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerHome: {
      flex: 1,
      padding: 20,
    },
    image: {
      width: 100,
      height: 170,
      resizeMode: 'cover',
      borderRadius: 5,
      margin: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
  });

export default styles;