// import層（他モジュールの読み込み）
import React from 'react';
import classes from './main.module.scss';

// type層（ファイル内で扱う型の定義）
interface AppButtonProps {
  text: string;
  accent?: boolean;
}
interface AppButtonDomProps {
  text: string;
  accent: boolean;
}

// DOM層（表示のみを担当するコンポーネント）
const AppButtonDom: React.FC<AppButtonDomProps> = ({ text, accent }: AppButtonDomProps) => (
  <button type="button" className={`${classes.button} ${accent ? classes.accent : classes.primary}`}>
    {text}
  </button>
);

// Container層（コンポーネント本体、状態・振る舞いを担当）
const AppButton: React.FC<AppButtonProps> = ({ text, accent = false }: AppButtonProps) => (
  <AppButtonDom text={text} accent={accent} />
);

// export層（他ファイルで使いたいモジュールを公開）
export { AppButtonDom, AppButton };
