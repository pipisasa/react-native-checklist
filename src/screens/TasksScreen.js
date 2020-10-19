import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Checkbox, Colors, List, ProgressBar, Title, TouchableRipple } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const TaskItem = (props)=>{
  const [status, setStatus] = useState(false);
  return (<List.Item title={props.title} left={()=> <Checkbox color="#000" status={status}/>}/>);
}

const TaskCard = ()=>{
  return (
    <Card style={{flexDirection:"column"}}>
      <Card.Title
        // style={{borderBottomColor: "#000", borderBottomWidth: "1px"}}
        title="2020-10-18"
        subtitle={`3/4 completed`}
      />
      <ProgressBar progress={0.75} color={Colors.grey800}/>
      <Card.Content>
        <List.Section>
            <TaskItem title="React" />
            <List.Item title="React" left={()=> <Checkbox color="#000" status="checked"/>}/>
            <List.Item title="React" left={()=> <Checkbox color="#000" status="checked"/>}/>
            <List.Item title="React" left={()=> <Checkbox color="#000" status="indeterminate"/>}/>
        </List.Section>
      </Card.Content>
    </Card>
  )
}

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <TaskCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  btn: {
    marginTop: 5,
  }
});
