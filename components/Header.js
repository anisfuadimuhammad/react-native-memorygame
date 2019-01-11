import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
	
	render() {
		return (
			<View style={styles.header}>
				<Text style={styles.header_text}>PERMAINAN MENGINGAT{"\n"}SEDERHANA</Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'column',
		alignSelf: 'stretch',
		paddingTop: 30,
		paddingBottom: 30,
		backgroundColor: '#ff7272'
	},
	header_text: {
		fontWeight: 'bold',
		fontSize: 25,
		textAlign: 'center'
	}
});