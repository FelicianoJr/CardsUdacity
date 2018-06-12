import React from "react";
import FlipCard from "react-native-flip-card";
import * as Progress from "react-native-progress";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {
  Buttons,
  TopView,
  TxtSub,
  ButtonCircle,
  TextTitle
} from "../../util/style";
import { getDeck } from "../../api";

export default class Quiz extends React.PureComponent {
  static navigationOptions = {
    title: "Quiz"
  };

  state = {
    questions: {},
    index: 0,
    count: 0,
    progress: 0,
    indeterminate: true
  };

  componentDidMount() {
    const params = this.props.navigation.state.params;
    getDeck(params).then(response => {
      const questions = response.questions;
      this.setState({ questions });
    });
    //this.animate();
  }

  onCorrect = () => {
    this.setState(({ count, index }) => ({
      count: count + 1,
      index: index + 1
    }));
  };

  onIncorrect = () => {
    this.setState(({ index }) => ({
      index: index + 1
    }));
  };

  animate = () => {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 500);
    }, 1000);
  };

  greeting = () => {
    this.animate();
    return (
      <Progress.Circle
        size={150}
        showsText={true}
        progress={this.state.progress}
        color={"rgba( 156, 39, 176,1)"}
        indeterminate={this.state.indeterminate}
      />
    );
  };

  render() {
    const { index, count, questions } = this.state;
    const percenCorrect = (count / questions.length).toFixed(1);
    const percenDone = ((index + 1) / questions.length).toFixed(1);
    console.log(index < questions.length);

    return (
      <View style={styles.container}>
        {index < questions.length ? (
          <View style={{ height: "90%" }}>
            <TxtSub> {`${index + 1}/${questions.length}`}</TxtSub>

            <FlipCard
              flipHorizontal={true}
              flipVertical={false}
              perspective={1000}
              style={{ borderWidth: 0, marginTop: 10 }}
            >
              {/* Face Side */}
              <TopView color="#9C27B0" justify="space-between">
                <TxtSub color="#FFFFFF"> Pergunta</TxtSub>
                <TextTitle color="#FFFFFF">
                  {this.state.questions[index].question}
                </TextTitle>
                <Icon name="x" size={10} color="transparent" />
              </TopView>
              {/* Back Side */}

              <TopView color="#00B89F" justify="space-between">
                <TxtSub color="#FFFFFF"> Resposta</TxtSub>
                <TextTitle color="#FFFFFF">
                  {this.state.questions[index].answer}
                </TextTitle>
                <Buttons>
                  <ButtonCircle onPress={this.onIncorrect}>
                    <Icon name="x" size={30} color="#FFF" />
                  </ButtonCircle>
                  <ButtonCircle onPress={this.onCorrect}>
                    <Icon name="check" size={30} color="#FFF" />
                  </ButtonCircle>
                </Buttons>
              </TopView>
            </FlipCard>
          </View>
        ) : (
          questions.length > 0 && this.greeting()
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
    height: "100%"
  }
});
