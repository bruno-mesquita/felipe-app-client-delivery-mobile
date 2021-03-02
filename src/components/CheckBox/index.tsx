import React, { Component } from 'react';
import { ListItem, CheckBox, Text, Content } from 'native-base';

export default class CheckBoxExample extends Component {
  state = {
    one: true,
    two: false,
  };

  onePressed() {
    alert('Sim');
  }

  render() {
    return (
      <Content style={{ flexDirection: 'row' }}>
        <ListItem>
          <CheckBox
            style={{ marginRight: 20, borderRadius: 4 }}
            checked={this.state.one}
            onPress={() => this.onePressed()}
            color="#ffffff"
          />
          <Text style={{ color: '#fff' }}>Mantenhe-me conectado</Text>
        </ListItem>
      </Content>
    );
  }
}
