import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      backgroundColor: '#00254d',
      justifyContent: "center",
      alignItems: "center",
      height: '100%',
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        backgroundColor: "#F3FCFD",
        width: "95%",
        height: "95%",
        borderRadius: 10,
        alignSelf: 'center',
      },
      cardContent: {
          paddingHorizontal: 18,
          marginTop: 10,
          fontSize: 22,
          color: "#302A36",
      },
      image: {
        height: '40%',
        width: '100%', 
        resizeMode: "stretch"
      },
      title: {
        fontSize: 25,
      },
      price: {
        fontSize: 28,
        fontWeight: "bold"
      },
      divider:{
        height: 1,
        backgroundColor: "gray",
        marginTop: 16,
        marginBottom: 12,
      },
      description: {
        fontSize: 20,
        color: '#575d5e',
        marginBottom: 5,
      },
      rating: {
        marginTop: 8,
        fontSize: 20
      },
      category: {
        marginTop: 20,
        fontSize: 12,  
      },
      stock: {
        marginTop: 8,
        fontSize: 20,  
      },
    });