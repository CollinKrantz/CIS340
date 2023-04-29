import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
   <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'baseline'}}>
<View style={{width: 50, height: 50, backroundColor: 'red', alignSelf: 'stretch'}}/>
<View style={{width: 50, height: 50, backroundColor: 'yellow'}}/>
<View style={{width: 50, height: 50, backroundColor: 'blue'}}/>
 </View>
  );
}