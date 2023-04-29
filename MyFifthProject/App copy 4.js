import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
   <View style={{flex: 1, flexDirection: 'row'}}>
<View style={{width: 50, height: 50, backroundColor: 'red'}}/>
<View style={{width: 50, height: 50, backroundColor: 'yellow'}}/>
<View style={{width: 50, height: 50, backroundColor: 'blue'}}/>
 </View>
  );
}