import React from 'react';
import styles from "../../styles"
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';


export const AddPhotoInitial = ({ navigation }) => {

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  
    if (!result.canceled) {
      // console.log(result.assets[0].uri);  
      navigation.navigate('AddPhotoSelected', { image: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a profile photo</Text>
      
      <View style={styles.photoPlaceholder}>
        <Icon name="smile" size={50} color="#3B82F6" />
      </View>
      
      <Text style={styles.subtitle}>
        Add a photo so your friends can find you
      </Text>
      
      <TouchableOpacity style={styles.outlineButton}
      onPress={pickImage}>
        <Text style={styles.outlineButtonText}>Choose a photo</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={() => navigation.navigate('AddPhotoSelected')}
      >
        <Icon name="camera" size={20} color="#FFF" />
        <Text style={styles.primaryButtonText}>Take a photo</Text>
      </TouchableOpacity>
    </View>
  );
};