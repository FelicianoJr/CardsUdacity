import React from "react";
import FlipCard from "react-native-flip-card";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {
  TopView,
  TxtSub,
  ButtonCircle,
  TextTitle,
  GroupButton,
  ViewFlip
} from "../../component/styled";
import { getDeck } from "../../api";
import Button from "../../component/button";
import { initialNotification } from "../../notification";

export default class Quiz extends React.PureComponent {
  static navigationOptions = {
    title: "Quiz"
  };

  state = {
    questions: {},
    index: 0,
    count: 0
  };

  componentDidMount() {
    const params = this.props.navigation.state.params;
    getDeck(params).then(response => {
      const questions = response.questions;
      this.setState({ questions });
    });
  }

  right = () => {
    this.setState(({ count, index }) => ({
      count: count + 1,
      index: index + 1
    }));
  };

  noRight = () => {
    this.setState(({ index }) => ({
      index: index + 1
    }));
  };

  getResult = () => {
    const { count, questions } = this.state;
    const correct = ((count / questions.length) * 100).toFixed(0);
    initialNotification();
    return (
      <View>
        <TextTitle>{`Você acertou ${correct}%`}</TextTitle>
        <TextTitle>{`Testou ${questions.length} cartões`}</TextTitle>
        <Button
          text="Voltar ao baralho"
          onpress={() => this.props.navigation.goBack()}
        />
        <Button
          text="Reiniciar o quiz"
          onpress={this.resetQuiz}
        />
      </View>
    );
  };

  resetQuiz = () => {
    this.setState({ index: 0, count: 0 });
  };

  render() {
    const { index, questions } = this.state;

    return (
      <ViewFlip>
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
              <TopView color="purple" justify="space-between">
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
                <GroupButton>
                  <ButtonCircle onPress={this.noRight}>
                    <Icon name="x" size={30} color="#FFF" />
                  </ButtonCircle>
                  <ButtonCircle onPress={this.right}>
                    <Icon name="check" size={30} color="#FFF" />
                  </ButtonCircle>
                </GroupButton>
              </TopView>
            </FlipCard>
          </View>
        ) : (
          questions.length > 0 && this.getResult()
        )}
      </ViewFlip>
    );
  }
}
