import React, { Component } from 'react';
// import { Navigation } from 'react-native-navigation';
// import { StackNavigator } from 'react-navigation';
import { Button, NavigatorIOS, Text, View, StyleSheet, TextInput } from 'react-native';

/*import Screen1 from './screens/MyScreen';
import Screen2 from './screens/MyScreen2';*/


// class HomeScreen extends React.Component{
// 	static navigationOptions = {
// 		title : 'Home'
// 	};
//
// 	state = {
// 		placeName : ''
// 	};
//
// 	placeNameChangedHandler = (val) => {
// 		this.setState({placeName : val})
// 	};
//
// 	render(){
// 		const { navigate } = this.props.navigation;
//
// 		return (
// 			<View style={styles.container}>
// 				{/*<Text onPress={ ()=> navigate('Profile')}>Press to navigate</Text>*/}
// 				<TextInput
// 					style={{width: 100, borderColor: 'black' }}
// 					value={this.state.placeName}
// 					onChangeText={this.placeNameChangedHandler} />
// 			</View>
// 		);
// 	}
// }
//
// class ProfileScreen extends React.Component{
// 	static navigationOptions = {
// 		title : 'Profile'
// 	};
// 	render(){
// 		const { navigate } = this.props.navigation;
// 		return (
// 			<View style={styles.container}>
// 				<Text onPress={ ()=> navigate('Home')}>Press to Home</Text>
// 			</View>
// 		);
// 	}
// }
//
// const NavigationApp = StackNavigator({
// 	Home : { screen : HomeScreen },
// 	Profile : { screen : ProfileScreen }
//
// });
//
// export default class App extends React.Component{
// 	render(){
// 		return <NavigationApp />
// 	}
// };
//
// const styles = StyleSheet.create({
// 	container : {
// 		flex : 1,
// 		alignItems : 'center',
// 		justifyContent: 'center'
// 	}
// });

export default class App extends Component{

	state= {
		placeName : ''
	};

	placeNameChangedHandler = (val) => {
		this.setState({placeName : val});
	};


	render(){
		return (
			<View style={styles.container}>
				<Text>{this.state.placeName}</Text>
				<TextInput
					style={styles.inputBox}
					value={this.state.placeName}
					onChangeText={this.placeNameChangedHandler}
					placeholder='An Awesome place'
					autoFocus
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		alignItems : 'center',
		//justifyContent: 'center',
		justifyContent: 'flex-start',
		backgroundColor : 'white'
		//paddingTop: 100
	},
	inputBox : {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#eee',
		height: 60,
		// padding: 10,
		width: '100%'
	}
});