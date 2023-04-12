import  React , {useState} from 'react';
import {  Text, Button, View } from 'react-native';


function TV(props){

const [isOff,setIsOff] = useState(true);

return(
<View>
<Text>
  {"\n\n\n\n"}
  
  This is {props.name} tv, and it is {isOff ? "OFF" : "Turn Me On"}
  </Text>
  <Button
  onPress={() =>{
    setIsOff(false);
  }}
  disabled={!isOff}
  title={isOff ? "Turn me On, Please!" : "Thank You!"} 
  />
</View>

);
}

export default function MultiTVs(){
  return(
<View>

<TV name="LG"/>
<TV name="Sony"/>

  </View>
  );


 
}
