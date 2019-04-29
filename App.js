import React, { Component } from 'react';
import { Text, View,Platform, FlatList, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { createStackNavigator, createAppContainer } from 'react-navigation';

const URL = "https://manbearpig.dk/CA3/api/info/all"
//Todo: Refactor into a seperate file (Basics.js), import and complete the exercise
class Basics extends React.Component {
 static navigationOptions = { title: "Learn the Basics" }
 render() {
   return (<View><Text>Learn The Basics</Text></View>)
 }
}

Greeting = ({name}) => {

 return (
   <View style={{ alignItems: 'center' }}>
     <Text>Hello {name}!</Text>
   </View>
 );

}

class LotsOfGreetings extends Component {
 render() {
   return (
     <View style={{ alignItems: 'center', top: 50 }}>
       <Greeting name='Rexxar' />
       <Greeting name='Lars' />
       <Greeting name='Valeera' />
     </View>
   );
 }
}

//Todo: Refactor into a seperate file (Props.js), import and complete the exercise
class Props extends React.Component {
 static navigationOptions = { title: "Learn about Props" }
 render() {
   return (
     <LotsOfGreetings />
   )
 }
}

class CountDemo extends Component {
 constructor(){
   super();
   this.state = {count: 1}
   setInterval(()=>{
     let count = this.state.count;
     count++;
     this.setState({count})
   },1000);
 }
 render(){
   return (
   <View>
   <Text style={{fontSize: 40}}>{this.state.count}</Text>
   </View>
   )
 }
}

class StateDemo extends React.Component {
 static navigationOptions = { title: "Learn about State" }
 render() {
   return (
     <CountDemo />
   )
 }
}


const styles3 = StyleSheet.create({
 container: {
  flex: 1,
  paddingTop: 22
 },
 item: {
   padding: 10,
   fontSize: 18,
   height: 44,
 },
})

class FetchDemo extends Component {
 state = {data: []}
 async componentWillMount(){
   const d = await fetch(URL).then(r=>r.json())
   const data = d.map(person=>{
     person.key = person.id;
     return person;
   })
   this.setState({data:d})
 }

 

 render(){
   return (
     <FlatList
         data={this.state.data}
         renderItem={({item}) => <Text style={styles.item}>{item.age}, {item.name}</Text>}
       />
   )
 }
}





//Todo: Create a new file (State.js), import it, add a "Touchable", and complete the exercise
//Todo: Create a new file (Style.js), import it, add a "Touchable", and complete the exercise
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (FlexBox.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (TextInput.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (Touches.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ScrollView.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ListViews.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (NetWorking.js), import it,add a "Touchable", and complete the exercise

const Touchable = (props) => (
 <TouchableOpacity style={styles.button} onPress={props.onPress}>
   <Text style={styles.buttonText}>{props.title}</Text>
 </TouchableOpacity>)

//Todo: Refactor into a seperate file (WhatToDo.js), import and complete the exercise
class WhatToDo extends React.Component {
 static navigationOptions = { title: "What I have to do" }
 render() {
   return (
     <View style={{ flex: 1 }}>
       <Text style={{ marginBottom: 3 }}>Complete all steps in Facebooks "The Basics" tutorial (see below)</Text>
       <Text style={{ marginBottom: 3 }}>For each of the 11 steps, add a corresponding Component in this project +
       the necessecary changes to navigate into it.(inspired by, how you navigated into this View)</Text>
       <Text style={{ marginBottom: 3 }}>Please observe that this View, includes an embedded WebView</Text>
       <WebView
         source={{ uri: "https://facebook.github.io/react-native/docs/tutorial.html" }}
         style={{ marginTop: 20, flex: 1 }}
       />
     </View>
   );
 }
}

class getMBPusers extends React.Component{
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: URL }}
          style={{ marginTop: 20, flex: 1 }}
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
 static navigationOptions = { title: 'CA3' };
 render() {
   const { navigate } = this.props.navigation;
   return (
     <View >
       <Text style={{ textAlign: "center", fontSize: 20 }}>
         www.manbearpig.dk</Text>
       <Touchable onPress={() => navigate('getusers')} title="Fetch MBP users" />
      </View>
   )
 }
}

//export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = createStackNavigator({
 Home: { screen: HomeScreen },
 basics: { screen: Basics },
 props: { screen: Props },
 web: { screen: WhatToDo },
 state: { screen: StateDemo },
 fetch1: { screen: FetchDemo },
 getusers: {screen: getMBPusers }
 });

const App = createAppContainer(RouteStack);
export default App;

const styles = StyleSheet.create({
 button: {
   margin: 3,
   alignItems: 'center',
   backgroundColor: '#2196F3'
 },
 buttonText: {
   padding: 7,
   fontSize: 18,
   fontWeight: "bold",
   color: 'white'
 }
})


