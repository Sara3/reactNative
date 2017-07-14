//how component should behave 
//interaction between component
import React from 'react';
//portal to moble device 
//output from component and render it in mobile device
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import Albumlist from './src/components/Albumlist';

//create a component 
const App = () => {
	return (
		<View style={{ flex: 1 }}>
			<Header headerText={'albums'} />
			<Albumlist />
		</View>
	);
};

//render
AppRegistry.registerComponent('albums', () => App);
