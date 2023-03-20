import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#002b30',
    // backgroundColor: "#16052b",
    backgroundColor: '#280D2C', 
    elevation: -20,
    shadowColor: "#000",
    shadowRadius: 5,
    height: "100%"
    
  },
    header:{
      paddingVertical: 20,
      paddingHorizontal: 16,
      backgroundColor: "#0077B6"
    },
    headerText: {
      fontSize: 24,
      fontFamily: 'Redrock'
  
    },
    card: {
        top: "40%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        // backgroundColor: "#F3FCFD",
        backgroundColor: '#fff',
        width: "70%",
        height: "20%",
        alignSelf: 'center',
      },
      cardContent: {
          paddingHorizontal: 18,
          marginTop: 10,
          fontSize: 22,
          // color: "#302A36",
          // color: "#ebf8ff",
          color: '#fff',
          justifyContent: "center",
          alignItems: "center",
      },
      title:{
        color: '#000',
        fontSize: 22,
        marginTop: 5,
        marginBottom: 40 
      },
      btn: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#400111',
        fontSize: 22,
        color: '#fff'      }
  });
  