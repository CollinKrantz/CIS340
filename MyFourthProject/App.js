import  React  from 'react';
import { Text, View, SectionList } from 'react-native';



export default  StatesApp = () => {
return(
<View style={{flex: 1, paddingTop: 22}}>
  <SectionList
  sections={[{title: 'A', data: ['Alabama', 'Alaska', 'Arizona','Arkansas']},
  {title: 'C', data: ['California', 'Colorado', 'Connecticut']},
  {title: 'F', data: ['Florida']},



  ]}

  
  renderItem={({item}) => <Text style={{padding: 10, fontSize:20, height: 44}}> {item} </Text>}
  renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft:10, 
  paddingright: 10, paddingBottom: 4, fontSize: 16, fontWeight: 'bold', backgroundColor: '9FA8DA',}}>{section.title}</Text>}
  keyExtractor={(item,index) =>index}
  

  
  />
</View>
);
  
   

}

