// import層（他モジュールの読み込み）
import React from 'react';
import classes from './main.module.scss';

// type層（ファイル内で扱う型の定義）[
type Option = {
  value: string;
  label: string;
};
type Options = Array<Option>;

type targetParam = {
  value: string;
};

interface AppSelectProps {
  id: string;
  value: string;
  options: Options;
  onChangeHandle: (event: React.ChangeEvent<targetParam>) => void;
}

interface AppSelectDomProps {
  id: string;
  value: string;
  options: Options;
  onChangeHandle: (event: React.ChangeEvent<targetParam>) => void;
}

// DOM層（表示のみを担当するコンポーネント）
const AppSelectDom: React.FC<AppSelectDomProps> = ({ value, options, onChangeHandle, id }: AppSelectDomProps) => (
  <select id={id} className={`${classes.select}`} value={value} onChange={onChangeHandle}>
    {options.map((o, key) => (
      // TODO:IDつけてあげたい
      // eslint-disable-next-line react/no-array-index-key
      <option key={key} className={`${classes.option}`} value={o.value}>
        {o.label}
      </option>
    ))}
  </select>
);

// Container層（コンポーネント本体、状態・振る舞いを担当）
const AppSelect: React.FC<AppSelectProps> = ({ value, options, onChangeHandle, id }: AppSelectProps) => (
  <AppSelectDom id={id} value={value} options={options} onChangeHandle={onChangeHandle} />
);

// export層（他ファイルで使いたいモジュールを公開）
export { AppSelectDom, AppSelect };
