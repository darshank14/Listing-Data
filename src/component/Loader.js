import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';


const Loader = props => {
  return props.loaderVisible ? (
    <Modal
      animationType="fade"
      transparent={true}
      statusBarTranslucent
      visible={props.loaderVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator size={'large'} color={"gray"} />
        </View>
      </View>
    </Modal>
  ) : (
    props.children || null
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor:'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Loader;
