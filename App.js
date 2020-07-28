import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [loc, setLoc] = useState(null);
  const [displayStr, setDisplayStr] = useState('null');

  let a = new Date();
  let x;
  
  if(a.getDay() <= 10) x = 1;
  else if (a.getDay() <= 20) x = 2;
  else x = 3;

  let findCoordinates = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          let newLoc = JSON.stringify(position);
          
          setLoc(newLoc);
          console.log(newLoc);
          setDisplayStr('(' + position.coords.longitude.toFixed(4) + ', ' + position.coords.latitude.toFixed(4) + ')');
        },
        error => Alert.alert(error.message)
      )
  };

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="Counter" onPress={() => setCount(count + x)}/>
      <View style={styles.spacing}></View>
      <Button title="Get Location" onPress={() => findCoordinates()}/>
      <Text>The current location (Long, Lat): {displayStr}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  spacing: {
    flex: .05,
  }
});
