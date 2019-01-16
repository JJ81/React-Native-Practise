// // import React from 'react';
// // import { StyleSheet, Text, View } from 'react-native';
// //
// // export default class App extends React.Component {
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <Text>Open up App.js to start working on your app!</Text>
// //         <Text>Changes you make will automatically reload.</Text>
// //         <Text>Shake your phone to open the developer menu.</Text>
// //       </View>
// //     );
// //   }
// // }
// //
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
//
// import React, { Component } from 'react';
// import {
// 	AppRegistry, Text, Image, View, StyleSheet, TextInput, Button, Alert, ScrollView, FlatList, SectionList, ListView,
// 	TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, ActivityIndicator
// } from 'react-native';
//
// /**
//  * 스타일을 이와 같이 필요에 따라서 만들어놓고 컴포넌트별로 사용할 수가 있다.
//  */
// const styles = StyleSheet.create({
// 	blue:{
// 		color: 'blue',
// 		fontSize: 16,
// 		fontWeight: 'bold'
// 	},
// 	containerMargin: {
// 		marginTop: 35,
// 		marginLeft: 15,
// 		marginRight: 15
// 	},
// 	// container: {
// 	// 	flex: 1,
// 	// 	justifyContent: 'center',
// 	// },
// 	buttonContainer: {
// 		margin: 20
// 	},
// 	alternativeLayoutButtonContainer: {
// 		margin: 20,
// 		flexDirection: 'row',
// 		justifyContent: 'space-between'
// 	},
// 	container: {
// 		flex: 1,
// 		paddingTop: 22
// 	},
// 	item: {
// 		padding: 10,
// 		fontSize: 18,
// 		height: 44,
// 	},
// 	sectionHeader: {
// 		paddingTop: 2,
// 		paddingLeft: 10,
// 		paddingRight: 10,
// 		paddingBottom: 2,
// 		fontSize: 14,
// 		fontWeight: 'bold',
// 		backgroundColor: 'rgba(247,247,247,1.0)',
// 	}
// });
//
// /**
//  * simple props test
//  */
// class Greeting extends Component {
//   render (){
//     return (
//       <Text>Text Component's TEST : {this.props.name}!</Text>
//     );
//   }
// }
//
// /**
//  * simple state test
//  */
// class Blink extends Component {
//   constructor(props){
//     super(props);
//     this.state = {showText: true};
//
// 	  // Toggle the state every second
// 	  setInterval(() => {
// 		  // this.setState(previousState => { // this.state.showText
// 			 //  return { showText: !previousState.showText };
// 		  // });
// 		  // 위의 코드를 좀 더 직관적으로 작성하면 아래와 같다. 위의 코딩방식은 아직 익숙하지 않네.
// 		  // this.setState(() => {
// 		  // 	return { showText : !this.state.showText };
// 		  // });
// 		  this.setState((prev) => { // prev는 결국 this.state을 나타낸다.
// 			  return { showText : !prev.showText };
// 		  });
// 	  }, 1000);
//   }
//
// 	render(){
// 		let display = this.state.showText ? this.props.text : '|';
// 		return (
// 		  <Text style={styles.blue}>{display}</Text>
//     );
//   }
// }
//
// /**
//  * 띄어쓰기를 한 갯수만큼 피자가 출력된다.
//  */
// class PizzaTranslator extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = { text : '' };
// 	}
//
// 	render (){
// 		return (
// 			<View style={{padding: 10}}>
// 				<TextInput style={{height: 40}}
// 				           placeholder='Type here to translator'
// 				           onChangeText={(text) => this.setState({text})}
// 				           />
// 				<Text style={{padding: 10, fontSize: 42}}>
// 					{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
// 				</Text>
// 			</View>
// 		);
// 	}
// }
//
// // class Movies extends Component {
// // 	constructor(props){
// // 		super(props);
// // 		this.state = {
// // 			isloading : true
// // 		};
// // 	}
// // }
//
// export default class HelloWorldApp extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			isloading : true
// 		};
// 	}
//
// 	componentDidMount(){
// 		return fetch('https://facebook.github.io/react-native/movies.json')
// 			.then((response) => response.json())
// 			.then((responseJson) => {
// 				let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
// 				this.setState({
// 					isLoading: false,
// 					dataSource: ds.cloneWithRows(responseJson.movies),
// 				}, function() {
// 					// do something with new state
// 				});
// 			})
// 			.catch((error) => {
// 				console.error(error);
// 			});
// 	}
//
//
// 	// event를 통해 호출할 함수는 render 함수 바깥쪽에서 선언을 해야 한다.
// 	_onPressButton() {
// 		Alert.alert('You tapped the button!')
// 	};
//
// 	render() {
// 		let pic = {
// 			uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
// 		};
//
// 		if (this.state.isLoading) {
// 			return (
// 				<View style={{flex: 1, paddingTop: 20}}>
// 					<ActivityIndicator />
// 				</View>
// 			);
// 		}
//
// 		return (
//
// 				<ScrollView style={styles.containerMargin, {flex: 1, backgroundColor : '#f0f0f0'}}>
// 					<View style={{flex: 1, paddingTop: 20}}>
// 						<ListView
// 							dataSource={this.state.dataSource}
// 							renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
// 						/>
// 					</View>
//
// 					<PizzaTranslator />
// 					<Image source={pic} style={{width: 380, height: 200}} />
// 					{/*<Image source={pic} style={{ flex : 1}} />*/}
// 	        <Text>Image Component test over shown.</Text>
// 				  <Greeting name='Hello!? Native Code!' />
// 	        <Blink text='Blinking text with Timer!' />
// 				  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
// 				  <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
// 				  <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
// 				  <View style={{ backgroundColor: 'red', flex : 1 }} />
// 				  <View style={{ backgroundColor: 'orange', flex : 2 }} />
// 				  <View style={{ backgroundColor: 'yellow', flex : 3 }} />
//
// 					<View style={{flex: 1, flexDirection: 'row'}}>
// 						<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
// 						<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
// 						<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
// 					</View>
//
// 					<View style={styles.buttonContainer}>
// 						<Button
// 							onPress={this._onPressButton}
// 							title="Press Me"
// 						/>
// 					</View>
// 					<View style={styles.buttonContainer}>
// 						<Button
// 							onPress={this._onPressButton}
// 							title="Press Me"
// 							color="#841584"
// 						/>
// 					</View>
//
// 					<Button
// 						onPress={this._onPressButton}
// 						title="Press Me"
// 					/>
//
// 					<View style={styles.alternativeLayoutButtonContainer}>
// 						<Button
// 							onPress={this._onPressButton}
// 							title="This looks great!"
// 						/>
// 						<Button
// 							onPress={this._onPressButton}
// 							title="OK!"
// 							color="#841584"
// 						/>
// 					</View>
//
// 					<TouchableHighlight onPress={this._onPressButton} underlayColor="white">
// 						<View style={styles.button}>
// 							<Text style={styles.buttonText}>TouchableHighlight</Text>
// 						</View>
// 					</TouchableHighlight>
// 					<TouchableOpacity onPress={this._onPressButton}>
// 						<View style={styles.button}>
// 							<Text style={styles.buttonText}>TouchableOpacity</Text>
// 						</View>
// 					</TouchableOpacity>
// 					<TouchableWithoutFeedback
// 						onPress={this._onPressButton}
// 					>
// 						<View style={styles.button}>
// 							<Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
// 						</View>
// 					</TouchableWithoutFeedback>
// 					<TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
// 						<View style={styles.button}>
// 							<Text style={styles.buttonText}>Touchable with Long Press</Text>
// 						</View>
// 					</TouchableHighlight>
//
// 					<View style={styles.container}>
// 						<FlatList
// 							data={[
// 								{key: 'Devin'},
// 								{key: 'Jackson'},
// 								{key: 'James'},
// 								{key: 'Joel'},
// 								{key: 'John'},
// 								{key: 'Jillian'},
// 								{key: 'Jimmy'},
// 								{key: 'Julie'},
// 							]}
// 							renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
// 						/>
// 					</View>
// 					<View style={styles.container}>
// 						<SectionList
// 							sections={[
// 								{title: 'D', data: ['Devin']},
// 								{title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
// 							]}
// 							renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
// 							renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
// 							keyExtractor={(item, index) => index}
// 						/>
// 					</View>
//
// 	      </ScrollView>
// 		);
// 	}
// }
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);


import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

export default class App extends Component{

	state= {
		placeName : '',
		places: []
	};

	placeNameChangedHandler = val => {
		this.setState({placeName : val});
	};

	placeSubmitHandler = () => {
		if(this.state.placeName.trim() === ''){
			return;
		}

		this.setState(prevState => {
			return {
				places : prevState.places.concat(prevState.placeName)
			};
		});

	};

	render(){
		const placesOutput = this.state.places.map((place, i) => <Text key={i}>{place}</Text>);

		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.placeInput}
						value={this.state.placeName}
						onChangeText={this.placeNameChangedHandler}
						placeholder='An Awesome place'
						autoFocus
					/>
					<Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler} />
				</View>
				<View>
					{placesOutput}
				</View>

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
		backgroundColor : 'white',
		// paddingTop: 100
	},

	inputContainer : {
		// flex : 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 30,
		paddingLeft: 10,
		paddingRight: 10,
		alignItems: 'center'
	},

	placeInput : {
		width: '80%'
	},

	placeButton : {
		width: '20%'
	},

	inputBox : {
		// alignItems: 'center',
		// justifyContent: 'center',
		// backgroundColor: '#eee',
		// height: 60,
		// padding: 10,
		// width: '100%'
	}
});