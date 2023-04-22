import  React  from 'react';
import { Text, Image, ScrollView } from 'react-native';

const dog = {
  uri: 'https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_960_720.png',
  width: 64,
  height: 64,
}

export default  MyScrollViewApp = () => {

  return (
   <ScrollView style={{padding: 40}}>
    <Text style={{fontSize: 80}}>
      try to scroll doown
    </Text>
    <Image source={require('./assets/dog.webp')} style = {{width: 64,
  height: 64,}}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Text style={{fontSize: 80}}>
      try to scroll down again, if you like
    </Text>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Text style={{fontSize: 80}}>
      try to scroll down again, if you like
    </Text>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Text style={{fontSize: 80}}>
      try to scroll down again, if you like
    </Text>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Text style={{fontSize: 80}}>
      try to scroll down again, if you like
    </Text>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Text style={{fontSize: 80}}>
      try to scroll down again, if you like
    </Text>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Text style={{fontSize: 80}}>
      try to scroll down again, if you like
    </Text>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Text style={{fontSize: 80}}>
      try to scroll down again, if you like
    </Text>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Text style={{fontSize: 80}}>
      try to scroll down again, if you like
    </Text>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
   </ScrollView>
  );

}
