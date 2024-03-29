import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper,Col, Cols, Cell } from 'react-native-table-component';
import { StatusBar } from 'react-native'
export default class Responsive  extends Component {
  constructor(props) {
    super(props);
    const elementButton = (value) => (
      <TouchableOpacity onPress={() => this._alertIndex(value)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Button</Text>
        </View>
      </TouchableOpacity>
    );
    this.state = {
      tableTitle: ['Title1', 'Title2', 'Title3', 'Title4'],
      tableData: [
        [elementButton('1'), 'ATUL KUMAR', 'ATUL KUMAR', 'ATUL KUMAR', 'ATUL KUMAR'],
        [elementButton('2'), '9793178230', '9793178230', '9793178230', '9793178230'],
        [elementButton('3'), '9793178230', '9793178230', '9793178230', '9793178230']
      ]
    }
  }

  _alertIndex(value) {
    Alert.alert(`This is column ${value}`);
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        <Table style={{flexDirection: 'row'}} borderStyle={{borderWidth: 1}}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
            <Cell data="" style={styles.singleHead}/>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={['H1', 'H2']} style={styles.head} heightArr={[60, 60]} textStyle={styles.text} />
              <Col data={state.tableTitle} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.titleText}></Col>
            </TableWrapper>
          </TableWrapper>

          {/* Right Wrapper */}
          <TableWrapper style={{flex:1}}>
            <Cols data={state.tableData} heightArr={[40, 30, 30, 30, 30]} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    },
  singleHead: {
      width: 80,
      height: 40,
      backgroundColor: '#c8e1ff',
      },
  head: {
      flex: 1,
      backgroundColor: '#c8e1ff',
    },
  title: { 
    flex: 2,
    backgroundColor: '#f6f8fa',
    },
  titleText: {
      marginRight: 6,
      textAlign:'right',
      },
  text: { 
    textAlign: 'center',
    },
  btn: { 
    width: 58,
    height: 18,
    marginLeft: 15,
    backgroundColor: '#c8e1ff',
    borderRadius: 5,
      },
  btnText: { 
    textAlign: 'center',
    },
});