import React, { Component } from 'react';
import { View, Text } from 'react-native';
import fetch from 'isomorphic-fetch';

class AlbumList extends Component {
 componentWillMount() {
 fetch('https://rallycoding.herokuapp.com/api/music_album')
 .then((response) => response.json())
 .then((responseData) => {
   console.log(responseData);
 });
 }

  render() {
   return (
     <View>
       <Text>Album List</Text>
     </View>
   );
 }
}

export default AlbumList;
