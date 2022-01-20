import { ContainerTextField, TextField } from './styles';
import { FieldProps } from './props';

export const FieldMask = ({ maskRef, ...rest }: FieldProps) => (
  <ContainerTextField>
    {maskRef ? <TextField {...rest} ref={maskRef} /> : <TextField {...rest} />}
  </ContainerTextField>
);
