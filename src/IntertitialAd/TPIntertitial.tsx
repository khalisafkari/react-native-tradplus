import {
  NativeModules,
  NativeEventEmitter,
  type EmitterSubscription,
} from 'react-native';

const Module = NativeModules.TPIntertitial;
const NativeEvent = new NativeEventEmitter(Module);

interface TPAdInfo {
  TPAdInfo: Object;
}

interface TPAdError {
  TPAdError: Object;
}

interface TPEvent {
  TPAdInfo: Object;
  TPAdError: Object;
}

interface DownloadEvent extends TPAdInfo {
  totalBytes: string;
  currBytes: string;
  fileName: string;
  appName: string;
}

interface DownloadEventProgress extends DownloadEvent {
  progress: number;
}

const setAdListener = (callback: {
  onAdLoaded: (TPAdInfo: TPAdInfo) => void;
  onAdClicked: (TPAdInfo: TPAdInfo) => void;
  onAdImpression: (TPAdInfo: TPAdInfo) => void;
  onAdFailed: (TPAdError: TPAdError) => void;
  onAdClosed: (TPAdInfo: TPAdInfo) => void;
  onAdReward: (TPAdInfo: TPAdInfo) => void;
  onAdVideoStart: (TPAdInfo: TPAdInfo) => void;
  onAdVideoEnd: (TPAdInfo: TPAdInfo) => void;
  onAdVideoError: (TPAdInfo: TPEvent) => void;
}) => {
  Module.setAdListener();
  const EventName: EmitterSubscription[] = [];
  for (let i of Object.keys(callback)) {
    const cb = callback as any;
    EventName.push(NativeEvent.addListener(i, cb[i]));
  }
  return {
    remove: () => {
      for (let i in EventName) {
        EventName[i]?.remove();
      }
    },
  };
};

const setAllAdLoadListener = (callback: {
  onAdAllLoaded: (info: { s: boolean }) => void;
  onAdStartLoad: (info: { s: string }) => void;
  oneLayerLoadFailed: (info: TPEvent) => void;
  oneLayerLoaded: (info: TPAdInfo) => void;
  oneLayerLoadStart: (info: TPAdInfo) => void;
  onBiddingStart: (info: TPAdInfo) => void;
  onBiddingEnd: (info: TPAdInfo) => void;
  onAdIsLoading: (info: { s: string }) => void;
}) => {
  Module.setAllAdLoadListener();
  const EventName: EmitterSubscription[] = [];
  for (let i of Object.keys(callback)) {
    const cb = callback as any;
    EventName.push(NativeEvent.addListener(i, cb[i]));
  }

  return {
    remove: () => {
      for (let i in EventName) {
        EventName[i]?.remove();
      }
    },
  };
};

const setDownloadListener = (callback: {
  onDownloadStart: (info: DownloadEvent) => void;
  onDownloadUpdate: (info: DownloadEventProgress) => void;
  onDownloadPause: (info: DownloadEvent) => void;
  onDownloadFinish: (info: DownloadEvent) => void;
  onDownloadFail: (info: DownloadEvent) => void;
  onInstalled: (info: DownloadEvent) => void;
}) => {
  Module.setDownloadListener();
  const EventName: EmitterSubscription[] = [];
  for (let i of Object.keys(callback)) {
    const cb = callback as any;
    EventName.push(NativeEvent.addListener(i, cb[i]));
  }

  return {
    remove: () => {
      for (let i in EventName) {
        EventName[i]?.remove();
      }
    },
  };
};

const IntertitialInit = (unitId: string) => {
  Module.IntertitialInit(unitId);
};

const loadAd = () => {
  Module.loadAd();
};

const reloadAd = () => {
  Module.reloadAd();
};

const setCustomShowData = (obj: Object) => {
  Module.setCustomShowData(obj);
};

const showAd = (entryAdScenario = null) => {
  Module.showAd(entryAdScenario);
};

const isReady = (): boolean => {
  return Module.isReady();
};

const isReadyAsync = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    Module.isReadyAsync().then(resolve).catch(reject);
  });
};

const entryAdScenario = (entryScenario: string) => {
  Module.entryAdScenario(entryScenario);
};

const setCustomParams = (obj: Object) => {
  Module.setCustomParams(obj);
};

const setNetworkExtObj = (obj: Object) => {
  Module.setNetworkExtObj(obj);
};

export default {
  setAdListener,
  setAllAdLoadListener,
  setDownloadListener,
  IntertitialInit,
  loadAd,
  reloadAd,
  setCustomShowData,
  showAd,
  isReady,
  isReadyAsync,
  entryAdScenario,
  setCustomParams,
  setNetworkExtObj,
};
