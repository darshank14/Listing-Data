import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Rating from '../component/Rating'


const ProductDetails = ({ navigation, route }) => {

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#CCCCCC',
    }}>
      <View style={{ margin: 10, padding: 10, borderRadius: 20, backgroundColor: '#fff' }}>

        <Image source={{ uri: data.image }} style={{ height: 150, marginVertical: 5 }} resizeMode='contain' />
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: '#000', }}>{data.description}</Text>

          <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>

            <Text style={{ fontSize: 14, color: '#000 ' }}>${data.price}</Text>
            <Rating initialRating={data?.rating.rate} />

          </View>
        </View>

      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})