import { StatusBar } from 'expo-status-bar';
import FetchProduct from './FetchProduct';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
// import Home from './Home';
const Stack = createStackNavigator();

export default function ScanProduct() {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState(0)

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log(text)
    console.log('Type: ' + type + '\nData: ' + data)
  };
  // const fakeBarCodeScan = () => {
  //   handleBarCodeScanned({ type: 32, data: 4890008100309 })

  // }


  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />

      </View>)
  }


  // Return the View
  return (

    <ScrollView >
      <View style={styles.barcodebox}>



        <BarCodeScanner

          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>Barcode:{text}</Text>

      {/* <Button title={'barcodeexample'} onPress={fakeBarCodeScan} /> */}

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='orange' />}

      {text > 0 ? (
        <FetchProduct barcode={text} />) : null}
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',

  },
  maintext: {
    padding: 20,
    fontSize: 20,

    fontWeight: 'bold'
  },
  barcodebox: {

    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 50,

  }
})

