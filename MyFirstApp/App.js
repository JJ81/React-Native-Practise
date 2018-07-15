import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import TextInputBox from './src/components/TextInputBox/TextInputBox';


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
		const placesOutput = this.state.places.map((place, i) => (
			<ListItem key={i} placeName={place} />
		));

		return (
			<View style={styles.container}>
				<TextInputBox
					placeName={this.state.placeName}
					placeNameChangedHandler={this.placeNameChangedHandler}
					placeSubmitHandler={this.placeSubmitHandler}
				/>
				<View style={styles.listContainer}>
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
		padding: 10
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

	listContainer : {
		width: '100%'

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