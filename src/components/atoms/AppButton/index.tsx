// import層（他モジュールの読み込み）
import React from 'react';
import classes from './main.module.scss';

// type層（ファイル内で扱う型の定義）
interface AppButtonProps {
  text: string;
}
interface AppButtonDomProps {
  text: string;
}

// DOM層（表示のみを担当するコンポーネント）
const AppButtonDom: React.FC<AppButtonDomProps> = (props: AppButtonDomProps) => {
  const { text } = props;
  return (
    <button type="button" className={classes.button}>
      {text}
    </button>
  );
};

// Container層（コンポーネント本体、状態・振る舞いを担当）
const AppButton: React.FC<AppButtonProps> = (props: AppButtonProps) => {
  const { text } = props;
  return <AppButtonDom text={text} />;
};

// export層（他ファイルで使いたいモジュールを公開）
export { AppButtonDom, AppButton };
