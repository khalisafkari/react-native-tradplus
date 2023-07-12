import type { NativeEventSubscription } from 'react-native';
import { NativeModules, NativeEventEmitter } from 'react-native';

const Module = NativeModules.TradPlusSdk;
const NativeEvent = new NativeEventEmitter(Module);

const initSdk = (appId: string) => {
  Module.initSdk(appId);
};

const setTradPlusInitListener = (callback: { onInitSuccess: () => void }) => {
  Module.setTradPlusInitListener();
  const EventName: NativeEventSubscription[] = [];
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

const setGDPRListener = (callback: { TPGDPRListener: (info: any) => void }) => {
  Module.TPGDPRListener();
  const EventName: NativeEventSubscription[] = [];

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

const setPrivacyListener = (callback: {
  TPPrivacyListener: (info: any) => void;
}) => {
  Module.setPrivacyListener();
  const EventName: NativeEventSubscription[] = [];
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

const getIsInit = (): Promise<boolean> => {
  return new Promise((r, j) => {
    Module.getIsInit().then(r).catch(j);
  });
};

const setIsCNLanguageLog = (cn: boolean) => {
  Module.setIsCNLanguageLog(cn);
};

const setDebugMode = (debug: boolean) => {
  Module.setDebugMode(debug);
};

const setGDPRDataCollection = (collection: number) => {
  Module.setGDPRDataCollection(collection);
};

const getGDPRDataCollection = (): Promise<number> => {
  return new Promise((r, j) => {
    Module.getGDPRDataCollection().then(r).catch(j);
  });
};

const setLGPDConsent = (collection: number) => {
  Module.setLGPDConsent(collection);
};

const getLGPDConsent = (): Promise<number> => {
  return new Promise((r, j) => {
    Module.getLGPDConsent().then(r).catch(j);
  });
};

const setEUTraffic = (eu: boolean) => {
  Module.setEUTraffic(eu);
};

const isEUTraffic = (): Promise<boolean> => {
  return new Promise((r, j) => {
    Module.isEUTraffic().then(r).catch(j);
  });
};

const setCalifornia = (eu: boolean) => {
  Module.setCalifornia(eu);
};

const isCalifornia = (): Promise<boolean> => {
  return new Promise((r, j) => {
    Module.isCalifornia().then(r).catch(j);
  });
};

const showUploadDataNotifyDialog = (url?: string) => {
  return new Promise((r, j) => {
    if (url) {
      Module.showUploadDataNotifyDialog(url).then(r).catch(j);
    } else {
      Module.showUploadDataNotifyDialog().then(r).catch(j);
    }
  });
};

const setIsFirstShowGDPR = (eu: boolean) => {
  Module.setIsFirstShowGDPR(eu);
};

const isFirstShowGDPR = (): Promise<boolean> => {
  return new Promise((r, j) => {
    Module.isFirstShowGDPR().then(r).catch(j);
  });
};

const setCOPPAIsAgeRestrictedUser = (eu: boolean) => {
  Module.setCOPPAIsAgeRestrictedUser(eu);
};

const isCOPPAAgeRestrictedUser = (): Promise<number> => {
  return new Promise((r, j) => {
    Module.isCOPPAAgeRestrictedUser().then(r).catch(j);
  });
};

const setGDPRChild = (eu: boolean) => {
  Module.setGDPRChild(eu);
};

const getGDPRChild = (): Promise<boolean> => {
  return new Promise((r, j) => {
    Module.getGDPRChild().then(r).catch(j);
  });
};

const setCCPADoNotSell = (eu: boolean) => {
  Module.setCCPADoNotSell(eu);
};

const isCCPADoNotSell = (): Promise<number> => {
  return new Promise((r, j) => {
    Module.isCCPADoNotSell().then(r).catch(j);
  });
};

const setAutoExpiration = (auto: boolean) => {
  Module.setAutoExpiration(auto);
};

const setAuthUID = (u: boolean) => {
  Module.setAuthUID(u);
};

const setOpenDelayLoadAds = (d: boolean) => {
  Module.setOpenDelayLoadAds(d);
};

const checkAutoExpiration = () => {
  Module.checkAutoExpiration();
};

const getAuthUID = (): Promise<boolean> => {
  return new Promise((r, j) => {
    Module.getAuthUID().then(r).catch(j);
  });
};

const setDevAllowTracking = (b: boolean) => {
  Module.setDevAllowTracking(b);
};

const isDevAllowTracking = (): Promise<boolean> => {
  return new Promise((r, j) => {
    Module.isDevAllowTracking().then(r).catch(j);
  });
};

const setCnServer = (cn: boolean) => {
  Module.setCnServer(cn);
};

const setAllowMessagePush = (allow: boolean) => {
  Module.setAllowMessagePush(allow);
};

const isAllowMessagePush = (): Promise<boolean> => {
  return new Promise((r, j) => {
    Module.isAllowMessagePush().then(r).catch(j);
  });
};

const isOpenPersonalizedAd = (): Promise<boolean> => {
  return new Promise((r, j) => {
    Module.isOpenPersonalizedAd().then(r).catch(j);
  });
};

const setOpenPersonalizedAd = (s: boolean) => {
  Module.setOpenPersonalizedAd(s);
};

const isPrivacyUserAgree = (): Promise<boolean> => {
  return new Promise((r, j) => {
    Module.isPrivacyUserAgree().then(r).catch(j);
  });
};

const setSettingDataParam = (obj: Object) => {
  Module.setSettingDataParam(obj);
};

const setPrivacyUserAgree = (obj: Object) => {
  Module.setPrivacyUserAgree(obj);
};

const setGlobalImpressionListener = (callback: {
  onImpressionSuccess: (info: { TPAdInfo: Object }) => void;
}) => {
  Module.setGlobalImpressionListener();
  const EventName: NativeEventSubscription[] = [];
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

const clearCache = (c: string) => {
  Module.clearCache(c);
};

const setMaxDatabaseSize = (obj: { max_db: number }) => {
  Module.setMaxDatabaseSize(obj);
};

const getSdkVersion = (): Promise<string> => {
  return new Promise((r, j) => {
    Module.getSdkVersion().then(r).catch(j);
  });
};

const checkCurrentArea = (callback: {
  TPPrivacyListener: (
    info:
      | {
          onSuccess: {
            isEu: boolean;
            isCn: boolean;
            isCalifornia: boolean;
          };
        }
      | {
          onFailed: any;
        }
  ) => void;
}) => {
  Module.checkCurrentArea();
  const EventName: NativeEventSubscription[] = [];
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

export default {
  initSdk,
  setTradPlusInitListener,
  setGDPRListener,
  setPrivacyListener,
  getIsInit,
  setIsCNLanguageLog,
  setDebugMode,
  setGDPRDataCollection,
  getGDPRDataCollection,
  setLGPDConsent,
  getLGPDConsent,
  setEUTraffic,
  isEUTraffic,
  setCalifornia,
  isCalifornia,
  showUploadDataNotifyDialog,
  setIsFirstShowGDPR,
  isFirstShowGDPR,
  setCOPPAIsAgeRestrictedUser,
  isCOPPAAgeRestrictedUser,
  setGDPRChild,
  getGDPRChild,
  setCCPADoNotSell,
  isCCPADoNotSell,
  setAutoExpiration,
  setAuthUID,
  setOpenDelayLoadAds,
  checkAutoExpiration,
  getAuthUID,
  setDevAllowTracking,
  isDevAllowTracking,
  setCnServer,
  setAllowMessagePush,
  isAllowMessagePush,
  isOpenPersonalizedAd,
  setOpenPersonalizedAd,
  isPrivacyUserAgree,
  setSettingDataParam,
  setPrivacyUserAgree,
  setGlobalImpressionListener,
  clearCache,
  setMaxDatabaseSize,
  getSdkVersion,
  checkCurrentArea,
};
