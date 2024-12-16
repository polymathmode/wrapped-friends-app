import styles from "../../styles";
import { View,TouchableOpacity,Text,TextInput,ScrollView} from "react-native";
import Icon from "react-native-vector-icons/Feather"; 


export const InviteFriends = () => {
    const contacts = [
      { id: '1', name: 'Damola Adegoke', avatar: '🟨' },
      { id: '2', name: 'Freedom chuks', avatar: '🟦' },
      { id: '3', name: 'Gift Chuks', avatar: '🟩' },
      { id: '4', name: 'Douglas Sandra', avatar: '🟫' },
      { id: '5', name: 'Ndu Ulenu', avatar: '🟫' },
      { id: '6', name: 'Thomas Sankara', avatar: '🟫' },
      { id: '7', name: 'Ibrahim Traore', avatar: '🟫' },
    ];
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Wrapped only works with friends</Text>
        
        <TouchableOpacity style={styles.greenButton}>
          <Text style={styles.greenButtonText}>Invite 5 best friends</Text>
        </TouchableOpacity>
        
        <View style={styles.friendsGrid}>
          {[...Array(5)].map((_, index) => (
            <View key={index} style={styles.friendSlot}>
              <View style={styles.friendIcon}>
                <Icon name="users" size={20} color="#3B82F6" />
              </View>
              <Text style={styles.friendSlotText}>No friend</Text>
              <Text style={styles.friendSlotText}>Invited yet</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.infoContainer}>
          <Icon name="info" size={16} color="#10B981" />
          <Text style={styles.infoText}>Why 5 friends?</Text>
        </View>
        
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search contacts"
            placeholderTextColor="#9CA3AF"
          />
        </View>
        
        <ScrollView style={styles.contactsList}>
          {contacts.map(contact => (
            <View key={contact.id} style={styles.contactItem}>
              <Text style={styles.contactAvatar}>{contact.avatar}</Text>
              <Text style={styles.contactName}>{contact.name}</Text>
              <TouchableOpacity style={styles.inviteButton}>
                <Text style={styles.inviteButtonText}>Invite</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        
        <TouchableOpacity style={styles.primaryButton}>
          <Icon name="users" size={20} color="#FFF" />
          <Text style={styles.primaryButtonText}>Invite 5 friends</Text>
          <Text style={styles.counterText}>0/5</Text>
        </TouchableOpacity>
        
        <Text style={styles.footerText}>🎉 Invited by Gift</Text>
      </View>
    );
  };