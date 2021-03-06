import React from 'react';

import { Labels } from './styles';

interface IPropsLabel {
  value: string;
}

export const Label = (props: IPropsLabel) => <Labels>{props.value}</Labels>;
