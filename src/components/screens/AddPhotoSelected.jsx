import styles from "../../styles";
import { View,TouchableOpacity,Text,Image} from "react-native";

export const AddPhotoSelected = ({route, navigation }) => {
  const { image } = route.params; 

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add a profile photo</Text>
        
        <View style={styles.selectedPhotoContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.selectedPhoto} />
        ) : (
          <Text>No image selected</Text>
        )}
      </View>
        
        <TouchableOpacity style={styles.outlineButton}>
          <Text style={styles.outlineButtonText}>Change photo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('InviteFriends')}
        >
          <Text style={styles.primaryButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };
  