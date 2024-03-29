import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.containerButton}>
      <Button
          onPress={() => {
            alert('you tapped button 1');
          }}
          title="Press Button 1"
        />

      </View>

      <Veiw style={styles.containerLayoutButton}>
      <Button
          onPress={() => {
            alert('you tapped button 2');
          }}
          title="Press Button 2"
        />
      
      <Button
          onPress={() => {
            alert('you tapped button Great!');
          }}
          title="Great!"
          color='green'
        />


      </Veiw>


      <View style={styles.containerButton}>
      <Button
          onPress={() => {
            alert('you tapped button Tap me');
          }}
          title="tap me!"
          color='red'
        />



      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 25,
  },
  containerLayoutButton:{
    margin: 20,
    flexDirection:'row',
    justifyContent: 'space-between',
  }
});
