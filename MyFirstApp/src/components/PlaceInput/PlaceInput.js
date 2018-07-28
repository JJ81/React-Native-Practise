import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Button} from "react-native";


class PlaceInput extends Component {
	state= {
		placeName : ''
	};

	placeNameChangedHandler = val => {
		this.setState({placeName : val});
	};

	placeSubmitHandler = () => {
		if(this.state.placeName.trim() === ''){
			return;
		}


		this.props.onPlaceAdded(this.state.placeName);

		// this.setState(prevState => {
		// 	return {
		// 		places : prevState.places.concat(prevState.placeName)
		// 	};
		// });

	};

	render(){
		return (
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.placeInput}
					value={this.placeName}
					onChangeText={this.placeNameChangedHandler}
					placeholder='An Awesome place'
					autoFocus
				/>
				<Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler} />
			</View>
		);
	}
}

const styles = StyleSheet.create({

	placeInput : {
		width: '80%'
	},

	placeButton : {
		width: '20%'
	},

	inputContainer : {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 30,
		paddingLeft: 10,
		paddingRight: 10,
		alignItems: 'center'
	}

});

export default PlaceInput;