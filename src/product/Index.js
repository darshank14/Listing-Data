import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Api from '../Service/Api'


import Loader from '../component/Loader'
// import { themeColor } from '../config/Theme/Index'
import AppIcons from '../component/AppIocn'
import { SafeAreaView } from 'react-native-safe-area-context'

const Index = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');


  const handleSearch = () => {
    const newData = filteredData.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(newData);
    setSearchText('')
  };



  const getProductList = async () => {
    try {
      setIsLoading(true);

      const res = await Api.get("products");
      // console.log(res)
      setFilteredData(res)
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error)
    }

  }


  useEffect(() => {

    getProductList();
  }, [])




  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>{
       navigation.navigate("ProductDetails", { DATA: item });
      }
    }>
      <View style={styles.itenConatainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode='contain' />

      <View style={{ flex: 1 }}>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc} numberOfLines={3}>{item.description}</Text>

      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Loader loaderVisible={isLoading}>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleSearch}>
            <AppIcons type={'Feather'} name="search" size={24} color="gray" />
          </TouchableOpacity>
        </View>


        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id?.toString()} />


      </Loader>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  iconContainer: {
    paddingLeft: 8,
  },

  flatlistconainer: {
    padding: 10,
    alignContent: 'center',
    borderRadius: 10,
    flexDirection: 'row'
  },

  itenConatainer: {
    padding: 6, gap: 8,
    flexDirection: 'row',
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 5,
    marginHorizontal: 10
  },
  itemImage: {
    aspectRatio: 1, borderRadius: 10
  },
  title: {
    fontSize: 16, fontWeight: 'bold', flex: 1,color:'#000',
  },
  desc: {
    fontSize: 14, color: "black", marginTop: 2,
  },
  //date: { fontSize: 16, color: themeColor.GREEN },
  price: { fontSize: 16, color: "gray" }
})