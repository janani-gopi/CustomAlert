import React, { useState } from "react";
import { View, Button, StyleSheet, TouchableOpacity } from "react-native";
import CustomAlert from "./CustomAlert";
import CustomModal from "./CustomModal";

const App = () => {
  //state initialization for the visibility of alert and modal component
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  //function to set the visibilty state of alert
  const showAlert = () => {
    setAlertVisible(true);
  };

  // function to hide the visibility state of alert
  const closeAlert = () => {
    setAlertVisible(false);
  };

  //function to set the visibilty state of custom modal
  const showModal = () => {
    setModalVisible(true);
  };

  // function to hide the visibility state of custom modal
  const hideModal = () => {
    setModalVisible(false);
  };

  const handleOkay = () => {
    // Handle "Okay" button click
    hideModal();
  };

  const handleCancel = () => {
    // Handle "Cancel" button click
    hideModal();
  };

  return (
    <View style={styles.container}>
      <Button title="Show Alert" onPress={showAlert} />
      {/* CUSTOM ALERT */}
      <CustomAlert
        visible={isAlertVisible}
        primarymessage="Primary message"
        secondarymessage="This is a secondary message"
        onClose={closeAlert}
        image={require("./assets/check.png")}
      />
      <Button title="Show Modal" onPress={showModal} />
      {/* CUSTOM MODAL */}
      <CustomModal
        visible={isModalVisible}
        primarymessage="Primary message"
        secondarymessage="This is a secondary message"
        image={require("./assets/check.png")}
        onOkay={handleOkay}
        onCancel={handleCancel}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent:"center"
  },
});
