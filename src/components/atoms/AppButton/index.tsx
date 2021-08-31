// import層（他モジュールの読み込み）
import React from 'react';
import classes from './main.module.scss';

// type層（ファイル内で扱う型の定義）
interface AppButtonProps {
  text: string;
  accent?: boolean;
  onClick?: () => void;
}
interface AppButtonDomProps {
  text: string;
  accent: boolean;
  onClick?: () => void;
}

// DOM層（表示のみを担当するコンポーネント）
const AppButtonDom: React.FC<AppButtonDomProps> = ({ text, accent, onClick }: AppButtonDomProps) => (
  <button
    type="button"
    className={`${classes.button} ${accent ? classes.accent : classes.primary}`}
    onClick={onClick ?? undefined}
  >
    {text}
  </button>
);

// Container層（コンポーネント本体、状態・振る舞いを担当）
const AppButton: React.FC<AppButtonProps> = ({ text, accent = false, onClick = undefined }: AppButtonProps) => (
  <AppButtonDom text={text} accent={accent} onClick={onClick} />
);

// export層（他ファイルで使いたいモジュールを公開）
export { AppButtonDom, AppButton };
