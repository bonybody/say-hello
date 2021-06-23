import * as React from 'react';
import { Presenter } from './Presenter';

interface AppButtonProps {
  text: string;
}

export const AppButton: React.FC<AppButtonProps> = (props: AppButtonProps) => {
  const { text } = props;
  return <Presenter text={text} />;
};
