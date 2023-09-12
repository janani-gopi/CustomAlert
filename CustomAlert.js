// CustomAlert.js
import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const CustomAlert = ({
  visible,
  primarymessage,
  secondarymessage,
  onClose,
  image,
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            elevation: 5,
            alignItems: "center",
            paddingVertical: 40,
            width: "90%",
          }}
        >
          <Image source={image} style={styles.image} />
          <Text style={styles.primarytext}>{primarymessage}</Text>
          <Text style={styles.secondarytext}>{secondarymessage}</Text>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.btntext}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e5e5e5",
    padding: 15,
    borderRadius: 15,
    width: 100,
  },
  btntext: {
    textAlign: "center",
  },
  primarytext: {
    marginBottom: 15,
    fontSize: 20,
  },
  secondarytext: {
    marginBottom: 25,
    fontSize: 15,
  },
  image: {
    height: 120,
    width: 120,
    marginBottom: 15,
  },
});
