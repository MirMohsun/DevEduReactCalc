import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/style';
import { Oper, Nums } from './functionality/functions'

export default class Calculator extends Component {

  constructor() {
    super()
    this.state = {
      resText: ""
    }
  }
  numClicked(text) {
    console.log("pressed btn is " + text)
    if (text == '=') {

    }
    this.setState(
      {
        resText: this.state.resText + text
      }
    )
  }
  opClicked(operation) {
    console.log("pressed btn is " + text)
    switch (operation) {
      case 'C':
        let secondNum = this.state.resText - text
        break
      case '+':
        break
      case '-':
        break
      case '*':
        break
      case '/':
        break
    }

  }
  render() {

    let operation = ['C', '+', '-', '*', '/']
    let ops = []
    for (let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity style={styles.btnstl} onPress={() => this.opClicked(operation[i])}>
          <Text style={styles.optxt}>{operation[i]}</Text>
        </TouchableOpacity>)
    }

    let rows = []
    let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity style={styles.btnstl} onPress={() => this.numClicked(nums[i][j])}>
            <Text style={[styles.btntxt]}>{nums[i][j]}</Text>
          </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }
    return (
      <View style={styles.container}>
        <View style={styles.number}>
          <Text style={styles.numberText}>{this.state.resText}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>Some Text</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {ops}
          </View>
        </View>
      </View>
    );
  }
}

