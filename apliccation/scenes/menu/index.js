import React from "react"
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { BaseView } from "../../util/style";


export default class FlatListBasics extends React.Component {
    render() {
      return (
        <BaseView>
         <Icon name="rocket" size={30} color="#999"/>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </BaseView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })