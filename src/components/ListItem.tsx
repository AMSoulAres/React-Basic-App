import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedbackProps,
} from "react-native";
import React from "react";
import defaultImg from '../../assets/baixados.png'

interface Props extends TouchableWithoutFeedbackProps {
  readonly imgUri: string;
  readonly title: string;
  readonly desc: string;
  readonly value: number;
  readonly rating: number;
}

const ListItem = (props: Props) => {
  generateBoxShadowStyle(-2, 4, "#171717", 0.2, 3, 4, "#171717");
  return (
    <TouchableOpacity
      {...props}
      style={{ justifyContent: "space-around", alignItems: "center" }}
    >
      <View style={[styles.itemWrapper, styles.boxShadow]}>
        <View style={styles.leftWrapper}>
          <Image source={defaultImg} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>
              {props.title.length > 17
                ? props.title.substring(0, 14) + "..."
                : props.title}
            </Text>
            <Text style={styles.subtitle} numberOfLines={3}>{props.desc.length > 17
                ? props.desc.substring(0, 14) + "..."
                : props.desc}</Text>
          </View>
        </View>
        <View style={styles.rightWrapper}>
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>
              R${" "}
              {props.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </Text>
            <Text style={styles.subtitle}>⭐ {props.rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider}></View>
    </TouchableOpacity>
  );
};

const generateBoxShadowStyle = (
  xOffset: number,
  yOffset: number,
  shadowColorIos: string,
  shadowOpacity: number,
  shadowRadius: number,
  elevation: number,
  shadowColorAndroid: string
) => {
  if (Platform.OS === "ios") {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === "android") {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

const styles = StyleSheet.create({
  itemWrapper: {
    // backgroundColor: "#F3FCFD",
    // backgroundColor: '#1f0505',
    backgroundColor: "#362538",
    borderRadius: 8,
    paddingRight: 16,
    width: "90%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxShadow: {},
  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 10,
    shadowColor: "#52006A",
  },
  leftWrapper: {
    flexDirection: "row",
  },
  rightWrapper: {
    marginTop: -50
  },
  image: {
    height: 150,
    width: 80,
    resizeMode: "stretch"
  },
  titlesWrapper: {
    marginTop: 50,
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    // color: '#001833'
    color: "#ebf8ff",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    // color: '#001833'
    color: "#ebf8ff",
  },
  divider:{
    height: 3,
    backgroundColor: "#F2063D",
    paddingRight: '43%',
    paddingLeft: '45%',
    marginRight: 8
  },
});

export default ListItem;
