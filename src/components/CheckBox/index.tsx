import React from 'react';
import { ListItem, Text, Content, NativeBase } from 'native-base';

import { Check } from './styles';

type Props = NativeBase.CheckBox & {
  children: React.ReactNode;
  borderRadius: number;
};

const CheckBoxExample = (props: Props) => {
  return (
    <Content style={{ flexDirection: 'row' }}>
      <ListItem>
        <Check
          style={{
            borderRadius: props.borderRadius,
            shadowColor: '#000000',
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 1.0,
            shadowRadius: 1.27,
            elevation: 4,
          }}
          checked={true}
          color="#ffffff"
          {...props}
        />
        <Text style={{ color: '#fff' }}>{props.children}</Text>
      </ListItem>
    </Content>
  );
};

export default CheckBoxExample;
