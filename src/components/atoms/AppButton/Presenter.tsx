import * as React from 'react';

interface PresenterProps {
  text: string;
}

export const Presenter: React.FC<PresenterProps> = (props: PresenterProps) => {
  const { text } = props;
  return <button type="button">{text}</button>;
};
