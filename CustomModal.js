import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const CustomModal = ({
  visible,
  image,
  primarymessage,
  secondarymessage,
  onOkay,
  onCancel,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={image} style={styles.image} />
          <Text style={styles.primarytext}>{primarymessage}</Text>
          <Text style={styles.secondarytext}>{secondarymessage}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onOkay} style={styles.button}>
              <Text style={styles.btntext}>Okay</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel} style={styles.button}>
              <Text style={styles.btntext}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    columnGap: 30,
  },
  button: {
    backgroundColor: "#e5e5e5",
    borderRadius: 15,
    width: 100,
    padding: 20,
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

export default CustomModal;
