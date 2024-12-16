import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      padding: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24,
      textAlign: 'center',
    },
    photoPlaceholder: {
      width: 128,
      height: 128,
      borderRadius: 64,
      backgroundColor: '#BFDBFE',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
    },
    selectedPhotoContainer: {
      width: 128,
      height: 128,
      borderRadius: 64,
      backgroundColor: '#E5E7EB',
      overflow: 'hidden',
      marginBottom: 16,
    },
    selectedPhoto: {
      width: '100%',
      height: '100%',
      backgroundColor: '#D1D5DB',
    },
    subtitle: {
      color: '#6B7280',
      marginBottom: 24,
      textAlign: 'center',
    },
    outlineButton: {
      width: '100%',
      padding: 12,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: '#3B82F6',
      marginBottom: 12,
    },
    outlineButtonText: {
      color: '#3B82F6',
      textAlign: 'center',
      fontSize: 16,
    },
    primaryButton: {
      width: '100%',
      padding: 12,
      borderRadius: 24,
      backgroundColor: '#3B82F6',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
    },
    primaryButtonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '500',
    },
    greenButton: {
      backgroundColor: '#10B981',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 24,
      marginTop: 8,
    },
    greenButtonText: {
      color: '#FFF',
      fontSize: 14,
    },
    friendsGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginVertical: 24,
    },
    friendSlot: {
      alignItems: 'center',
    },
    friendIcon: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: '#BFDBFE',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 4,
    },
    friendSlotText: {
      fontSize: 12,
      color: '#6B7280',
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16,
    },
    infoText: {
      fontSize: 14,
      color: '#10B981',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F3F4F6',
      borderRadius: 24,
      paddingHorizontal: 16,
      marginBottom: 24,
    },
    searchInput: {
      flex: 1,
      padding: 12,
      fontSize: 16,
    },
    contactsList: {
      width: '100%',
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
    },
    contactAvatar: {
      fontSize: 24,
      marginRight: 12,
    },
    contactName: {
      flex: 1,
      fontSize: 16,
    },
    inviteButton: {
      backgroundColor: '#F3F4F6',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 24,
    },
    inviteButtonText: {
      fontSize: 14,
    },
    counterText: {
      color: '#FFF',
      marginLeft: 'auto',
    },
    footerText: {
      marginTop: 16,
      color: '#6B7280',
      fontSize: 14,
    },
  });

  export default styles