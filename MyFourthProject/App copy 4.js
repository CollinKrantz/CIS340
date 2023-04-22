import  React  from 'react';
import { Text, View, FlatList } from 'react-native';



export default  StatesApp = () => {
return(
<View style={{flex: 1, paddingTopP: 22}}>
  <FlatList
  data={[
    {key: 'Alabama'},
    {key: 'Alaska'},
    {key: 'Colorado'},
    {key: 'Texas'},
    {key: 'California'},
    {key: 'New York'},
    {key: 'Oregon'},
    {key: 'Washington'},
    {key: 'Utah'},
    {key: 'Arizona'},
    {key: 'Georgia'},
    {key: 'Michigan'},
    {key: 'Maine'},
    {key: 'Idaho'},

  ] }
  renderItem={({item}) => <Text style={{padding: 10, fontSize:20, height: 44}}> {item.key} </Text>}
  />
</View>
)
  
   

};

