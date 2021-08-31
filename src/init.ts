import * as SpeechSdk from 'microsoft-cognitiveservices-speech-sdk';

const subscriptionKey = process.env.REACT_APP_AZURE_SUBSCRIPTION_KEY;
const region = process.env.REACT_APP_AZURE_SERVICE_REGION;
// TODO:日本語以外も対応したい
const language = 'ja-JP';

// eslint-disable-next-line import/no-mutable-exports
let speechTranslationConfig: SpeechSdk.SpeechTranslationConfig;

if (subscriptionKey && region) {
  speechTranslationConfig = SpeechSdk.SpeechTranslationConfig.fromSubscription(subscriptionKey, region);
  speechTranslationConfig.speechRecognitionLanguage = language;
}

export { speechTranslationConfig };
