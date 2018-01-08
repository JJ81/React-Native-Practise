// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet } from 'react-native';

/**
 * 스타일을 이와 같이 필요에 따라서 만들어놓고 컴포넌트별로 사용할 수가 있다.
 */
const styles = StyleSheet.create({
	blue:{
		color: 'blue',
		fontSize: 16,
		fontWeight: 'bold'
	},
	containerMargin: {
		marginTop: 35,
		marginLeft: 15,
		marginRight: 15
	}
});

/**
 * simple props test
 */
class Greeting extends Component {
  render (){
    return (
      <Text>Text Component's TEST : {this.props.name}!</Text>
    );
  }
}

/**
 * simple state test
 */
class Blink extends Component {
  constructor(props){
    super(props);
    this.state = {showText: true};

	  // Toggle the state every second
	  setInterval(() => {
		  // this.setState(previousState => { // this.state.showText
			 //  return { showText: !previousState.showText };
		  // });
		  // 위의 코드를 좀 더 직관적으로 작성하면 아래와 같다. 위의 코딩방식은 아직 익숙하지 않네.
		  // this.setState(() => {
		  // 	return { showText : !this.state.showText };
		  // });
		  this.setState((prev) => { // prev는 결국 this.state을 나타낸다.
			  return { showText : !prev.showText };
		  });
	  }, 1000);
  }

	render(){
		let display = this.state.showText ? this.props.text : '|';
		return (
		  <Text style={styles.blue}>{display}</Text>
    );
  }
}

export default class HelloWorldApp extends Component {
	render() {
		let pic = {
			uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
		};

		return (
		  <View style={styles.containerMargin}>
			  <Image source={pic} style={{width: 345, height: 200}} />
        <Text>Image Component test over shown.</Text>
			  <Greeting name='Hello!? Native Code!' />
        <Blink text='Blinking text with Timer!' />
      </View>
		);
	}
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);