import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';


export default class App extends Component{

	state= {
		places: []
	};

	placeAddedHandler = placeName => {
		this.setState(prevState => {
			return {
				places : prevState.places.concat(placeName)
			};
		});
	};

	placeDeletedHandler = index => {
		this.setState(prevState => {
			return {
				places : prevState.places.filter((place, i) => {
					return i !== index;
				})
			};
		});
	};

	render(){
		return (
			<View style={styles.container}>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
				<PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		alignItems : 'center',
		justifyContent: 'flex-start',
		backgroundColor : 'white',
		padding: 10
	}
});