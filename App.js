import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Index from './src/product/Index'
import {  NavigationContainer } from '@react-navigation/native'
import ProductDetails from './src/product/ProductDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator >
        <Stack.Screen name="product" component={Index} options={{headerShown:false}} />
        <Stack.Screen name= "ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})