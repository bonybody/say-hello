import * as React from 'react';
import classes from './main.module.css';

interface PresenterProps {
  text: string;
}

export const Presenter: React.FC<PresenterProps> = (props: PresenterProps) => {
  const { text } = props;
  return (
    <button type="button" className={classes.button}>
      {text}
    </button>
  );
};
