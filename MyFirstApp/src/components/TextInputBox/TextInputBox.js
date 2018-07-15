import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';


const TextInputBox = (props) => (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.placeInput}
				value={props.placeName}
				onChangeText={props.placeNameChangedHandler}
				placeholder='An Awesome place'
				autoFocus
			/>
			<Button title="Add" style={styles.placeButton} onPress={props.placeSubmitHandler} />
		</View>
);

const styles = StyleSheet.create({

	placeInput : {
		width: '80%'
	},

	placeButton : {
		width: '20%'
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
	}

});

export default TextInputBox;