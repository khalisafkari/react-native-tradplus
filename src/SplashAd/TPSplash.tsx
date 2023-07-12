import { NativeModules } from 'react-native';

const Module = NativeModules.TPSplash;

const splashInit = (adId: string) => {
  Module.splashInit(adId);
};

const setAdListener = () => {
  Module.setAdListener();
};

const setAllAdLoadListener = () => {
  Module.setAllAdLoadListener();
};

const loadAd = () => {
  Module.loadAd();
};

const showAdNull = () => {
  Module.showAdNull();
};

const isReady = (): boolean => {
  return Module.isReady();
};

const isReadyAsync = (): Promise<boolean> => {
  return new Promise((r, j) => {
    Module.isReadyAsync().then(r).catch(j);
  });
};

const setDownloadListener = () => {
  Module.setDownloadListener();
};

const setCustomShowData = () => {
  Module.setCustomShowData();
};

const setCustomParams = () => {
  Module.setCustomParams();
};

const showAd = () => {
  Module.showAd();
};

const setDefaultConfig = () => {
  Module.setDefaultConfig();
};

const setNetworkExtObj = () => {
  Module.setNetworkExtObj();
};

export default {
  splashInit,
  setAdListener,
  setAllAdLoadListener,
  loadAd,
  showAdNull,
  isReady,
  isReadyAsync,
  setDownloadListener,
  setCustomShowData,
  setCustomParams,
  showAd,
  setDefaultConfig,
  setNetworkExtObj,
};
