import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      // backgroundColor: '#00254d', //v1
      // backgroundColor: "#16052b", //v2
      backgroundColor:'#280D2C', //v3
      justifyContent: "center",
      alignItems: "center",
      height: '100%',
      flexDirection: "row",
    },
    line: {
        width: 1,
        backgroundColor: "#bf0a34",
        opacity: 0.5,
        paddingVertical: '88%',
        top: -40,

    },
    card: {
      top: -10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        // backgroundColor: "#F3FCFD",
        backgroundColor: '#362538',
        width: "95%",
        height: "90%",
        alignSelf: 'center',
      },
      cutDiamondTopLineLeft: { 
        width: 1,
        backgroundColor: "#bf0a34",
        opacity: 0.5,
        paddingVertical: "4500%",
        transform: [{rotate: '-45deg'}],
        position: "absolute",
        left: 21,
        top: -18,
      },
      cutDiamondTopLineRight: { 
        width: 1,
        backgroundColor: "#bf0a34",
        opacity: 0.5,
        paddingVertical: "4500%",
        transform: [{rotate: '45deg'}],
        position: "absolute",
        right: 21,
        top: -18,
      },
      cutDiamondTop: {
        top: -11,
        width: '95%',
        height: 0,
        borderTopWidth: 0,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderLeftWidth: 40,
        borderRightColor: "transparent",
        borderRightWidth: 40,
        borderBottomColor: '#362538',
        borderBottomWidth: 40,
        transform: [{rotate: "180deg"}]
      },
      
      cardContent: {
          paddingHorizontal: 18,
          marginTop: 10,
          fontSize: 22,
          // color: "#302A36",
          // color: "#ebf8ff",
          color: '#1f0505',
          opacity: 0.8
      },
      image: {
        height: '40%',
        width: '100%', 
        resizeMode: "stretch"
      },
      title: {
        fontSize: 25,
        color: "#fff",
      },
      price: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fcf300",
      },
      divider:{
        height: 1,
        backgroundColor: "#ff1111",
        marginTop: 10,
        marginBottom: 12,
      },
      description: {
        fontSize: 20,
        // color: '#575d5e',
        color: "#ff1111",
        marginBottom: 5,
      },
      rating: {
        marginTop: 8,
        fontSize: 20,
        color: "#ebf8ff",
      },
      category: {
        marginTop: 20,
        fontSize: 12,
        color: "#ebf8ff",
      },
      stock: {
        marginTop: 8,
        fontSize: 20, 
        color: "#ebf8ff",
      },
      cartButton: {
        marginHorizontal: 4,
        marginTop: 10,
        width: 160,
        height: 80,
        resizeMode: "contain",
        opacity: 0.8,
      }
    });