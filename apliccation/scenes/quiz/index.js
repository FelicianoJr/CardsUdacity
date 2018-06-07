import React from "react";
import FlipCard from "react-native-flip-card";
import { View, Text, StyleSheet, TouchableOpacity,ProgressBarAndroid } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default class Quiz extends React.PureComponent {
  static navigationOptions = {
    title: "Quiz"
  };

  render() {
    return (
      <View style={styles.container}>
       <ProgressBarAndroid styleAttr = "Horizontal"
        progress = { 50 } indeterminate = { false } /> 
        <FlipCard
          flipHorizontal={true}
          flipVertical={false}
          perspective={1000}
          style={styles.flipCard}
          // style={{ borderWidth: 0, marginTop: 10 ,}}
        >
          {/* Face Side */}
          <View style={{ flex: 1 }}>
            <View style={{ flex: 4, alignItems: "center" }}>
              <Text style={styles.flipText}>The Face</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  backgroundColor: "#cb6ee1",
                  borderRadius: 100,
                  marginLeft:30
                }}
              >
                <Icon name="x" size={30} color="#FFF" />
                {/* <Icon name={"chevron-right"} size={30} color="#01a699" /> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  backgroundColor: "#cb6ee1",
                  borderRadius: 100,
                  marginRight:30
                }}
              >
                <Icon name="check" size={30} color="#FFF" />
                {/* <Icon name={"chevron-right"} size={30} color="#01a699" /> */}
              </TouchableOpacity>
            </View>
          </View>
          {/* Back Side */}
          <View >
            <Text>The Back</Text>
          </View>
        </FlipCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF"
  },
  flipCard: {
    width: 280,
    backgroundColor: "#9C27B0",
    backfaceVisibility: "hidden",
    borderWidth: 0
  },
  flipCardBack: {
    backgroundColor: "red",
    position: "absolute",
    top: 0
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});
