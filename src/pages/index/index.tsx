import React, { useState } from 'react';
import * as SpeechSdk from 'microsoft-cognitiveservices-speech-sdk';
import { AppButton } from '../../components/atoms/AppButton';
import classes from './main.module.scss';
import logo from '../../assets/images/logo.svg';
import { speechTranslationConfig } from '../../init';
import { AppSelect } from '../../components/atoms/AppSelect';

type changeTargetParam = {
  value: string;
};

const Index: React.FC = () => {
  const [target, setTarget] = useState<string>('en');
  const [translatedText, setTranslatedText] = useState<string | null>(null);
  const [translateText, setTranslateText] = useState<string>('');
  const [translating, setTranslating] = useState<boolean>(false);

  // TODO:どこかから一括で取得できるようにしたい
  const options = [
    { value: 'en', label: '英語' },
    { value: 'fr', label: 'フランス語' },
    { value: 'de', label: 'ドイツ語' },
    { value: 'ko', label: '韓国語' },
    { value: 'pt-pt', label: 'ポルトガル語(ポルトガル)' },
    { value: 'pt-br', label: 'ポルトガル語(ブラジル)' },
    { value: 'zh-Hans', label: '簡体中国語' },
    { value: 'zh-Hant', label: '中国語 (繁体字)' },
    { value: 'it', label: 'イタリア語' },
    { value: 'es', label: 'スペイン語' },
    { value: 'es', label: 'スペイン語' },
    { value: 'ar', label: 'アラビア語' },
  ];
  const targetChangeHandler = (event: React.ChangeEvent<changeTargetParam>) => {
    setTarget(event.target.value);
  };

  const onClick = () => {
    setTranslating(true);
    speechTranslationConfig.addTargetLanguage(target);
    let recognizer: SpeechSdk.TranslationRecognizer | undefined = new SpeechSdk.TranslationRecognizer(
      speechTranslationConfig
    );
    recognizer?.recognizeOnceAsync(
      ({ translations, text }) => {
        const translation = translations.get(target);
        setTranslateText(text);
        setTranslatedText(translation);
        recognizer?.close();
        recognizer = undefined;
        setTranslating(false);
      },
      (err) => {
        recognizer?.close();
        recognizer = undefined;
        setTranslating(false);
      }
    );
  };
  return (
    <div className={classes.wrap}>
      <div>
        <p className={classes.image}>
          <img src={logo} alt="SayHello" />
        </p>
        <p className={classes.catchCopy}>あなたと世界をちょっと身近に</p>

        <div className={classes.content}>
          <p className={classes.heading}>「翻訳」ボタンを押して一言喋ってみよう</p>
          <div className={classes.formSection}>
            <p className={classes.label}>翻訳結果</p>
            {}
            <p>{translatedText ?? '翻訳してください....'}</p>
            <p>{translatedText ? `翻訳前：${translateText}` : ''}</p>
          </div>
          <div className={classes.formSection}>
            <label className={`${classes.label}`} htmlFor="target">
              翻訳したい言語
            </label>
            <AppSelect id="target" value={target} options={options} onChangeHandle={targetChangeHandler} />
          </div>
          <div className={`${classes.formSection} ${classes.button}`}>
            <AppButton text={translating ? '翻訳中...' : '翻訳'} onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
