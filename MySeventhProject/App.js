import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {
  _onPressButton(){
    alert('you tapped a button')
  }
  render(){

  
  return (
    <View style={styles.container}>
      
      <View style={styles.containerButton}>
      <Button
          onPress={this._onPressButton}
          
          title="Press Button 1"
        />

      </View>

      <Veiw style={styles.containerLayoutButton}>
      <Button
          onPress={this._onPressButton}
          title="Press Button 2"
        />
      
      <Button
         onPress={this._onPressButton}
          title="Great!"
          color='green'
        />


      </Veiw>


      <View style={styles.containerButton}>
      <Button
         onPress={this._onPressButton}
          title="tap me!"
          color='red'
        />



      </View>


    </View>
  );
}}

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
