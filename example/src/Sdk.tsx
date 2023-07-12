import React, { useCallback, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { TPTradPlusSdk } from 'react-native-tradplus';
import styles, { pressStyle } from './styles';

const Sdk = () => {
  const [init, setInit] = useState(false);
  const [version, setVersion] = useState('version');

  const initSdk = useCallback(() => {
    TPTradPlusSdk.initSdk('44273068BFF4D8A8AFF3D5B11CBA3ADE');
    setInit(!init);
  }, [init]);

  const setTradPlusInitListener = useCallback(() => {
    TPTradPlusSdk.setTradPlusInitListener({
      onInitSuccess() {
        console.log('success');
      },
    });
  }, []);

  const setGDPRListener = useCallback(() => {
    TPTradPlusSdk.setGDPRListener({
      TPGDPRListener(info) {
        console.log(info);
      },
    });
  }, []);

  const setPrivacyListener = useCallback(() => {
    TPTradPlusSdk.setPrivacyListener({
      TPPrivacyListener(info) {
        console.log(info);
      },
    });
  }, []);

  const getIsInit = useCallback(() => {
    TPTradPlusSdk.getIsInit().then((r) => {
      console.log('getIsInit', r);
    });
  }, []);

  const setIsCNLanguageLog = useCallback(() => {
    TPTradPlusSdk.setIsCNLanguageLog(true);
  }, []);

  const setDebugMode = useCallback(() => {
    TPTradPlusSdk.setDebugMode(true);
  }, []);

  const setGDPRDataCollection = useCallback(() => {
    TPTradPlusSdk.setGDPRDataCollection(0);
  }, []);

  const getGDPRDataCollection = useCallback(() => {
    TPTradPlusSdk.getGDPRDataCollection().then((r) => {
      console.log('getGDPRDataCollection', r);
    });
  }, []);

  const setLGPDConsent = useCallback(() => {
    TPTradPlusSdk.setLGPDConsent(0);
  }, []);

  const getLGPDConsent = useCallback(() => {
    TPTradPlusSdk.getLGPDConsent().then((r) => {
      console.log('getLGPDConsent', r);
    });
  }, []);

  const setEUTraffic = useCallback(() => {
    TPTradPlusSdk.setEUTraffic(true);
  }, []);

  const isEUTraffic = useCallback(() => {
    TPTradPlusSdk.isEUTraffic().then((r) => {
      console.log('isEUTraffic', r);
    });
  }, []);

  const setCalifornia = useCallback(() => {
    TPTradPlusSdk.setCalifornia(true);
  }, []);

  const isCalifornia = useCallback(() => {
    TPTradPlusSdk.isCalifornia().then((r) => {
      console.log('isCalifornia', r);
    });
  }, []);

  const showUploadDataNotifyDialog = useCallback(() => {
    TPTradPlusSdk.showUploadDataNotifyDialog('/').then((r) => {
      console.log('showUploadDataNotifyDialog', r);
    });
  }, []);

  const setIsFirstShowGDPR = useCallback(() => {
    TPTradPlusSdk.setIsFirstShowGDPR(true);
  }, []);

  const isFirstShowGDPR = useCallback(() => {
    TPTradPlusSdk.isFirstShowGDPR().then((r) => {
      console.log('isFirstShowGDPR', r);
    });
  }, []);

  const setCOPPAIsAgeRestrictedUser = useCallback(() => {
    TPTradPlusSdk.setCOPPAIsAgeRestrictedUser(true);
  }, []);

  const isCOPPAAgeRestrictedUser = useCallback(() => {
    TPTradPlusSdk.isCOPPAAgeRestrictedUser().then((r) => {
      console.log('isCOPPAAgeRestrictedUser', r);
    });
  }, []);

  const setGDPRChild = useCallback(() => {
    TPTradPlusSdk.setGDPRChild(true);
  }, []);

  const getGDPRChild = useCallback(() => {
    TPTradPlusSdk.getGDPRChild().then((r) => {
      console.log('getGDPRChild', r);
    });
  }, []);

  const setCCPADoNotSell = useCallback(() => {
    TPTradPlusSdk.setCCPADoNotSell(true);
  }, []);

  const isCCPADoNotSell = useCallback(() => {
    TPTradPlusSdk.isCCPADoNotSell().then((r) => {
      console.log('isCCPADoNotSell', r);
    });
  }, []);

  const setAutoExpiration = useCallback(() => {
    TPTradPlusSdk.setAutoExpiration(true);
  }, []);

  const setAuthUID = useCallback(() => {
    TPTradPlusSdk.setAuthUID(true);
  }, []);

  const setOpenDelayLoadAds = useCallback(() => {
    TPTradPlusSdk.setOpenDelayLoadAds(true);
  }, []);

  const checkAutoExpiration = useCallback(() => {
    TPTradPlusSdk.checkAutoExpiration();
  }, []);

  const getAuthUID = useCallback(() => {
    TPTradPlusSdk.getAuthUID().then((r) => {
      console.log('getAuthUID', r);
    });
  }, []);

  const setDevAllowTracking = useCallback(() => {
    TPTradPlusSdk.setDevAllowTracking(true);
  }, []);

  const isDevAllowTracking = useCallback(() => {
    TPTradPlusSdk.isDevAllowTracking().then((r) => {
      console.log('isDevAllowTracking', r);
    });
  }, []);

  const setCnServer = useCallback(() => {
    TPTradPlusSdk.setCnServer(true);
  }, []);

  const setAllowMessagePush = useCallback(() => {
    TPTradPlusSdk.setAllowMessagePush(true);
  }, []);

  const isAllowMessagePush = useCallback(() => {
    TPTradPlusSdk.isAllowMessagePush().then((r) => {
      console.log('isAllowMessagePush', r);
    });
  }, []);

  const isOpenPersonalizedAd = useCallback(() => {
    TPTradPlusSdk.isOpenPersonalizedAd().then((r) => {
      console.log('isOpenPersonalizedAd', r);
    });
  }, []);

  const setOpenPersonalizedAd = useCallback(() => {
    TPTradPlusSdk.setOpenPersonalizedAd(true);
  }, []);
  const isPrivacyUserAgree = useCallback(() => {
    TPTradPlusSdk.isPrivacyUserAgree().then((r) => {
      console.log('isPrivacyUserAgree', r);
    });
  }, []);
  const setSettingDataParam = useCallback(() => {
    TPTradPlusSdk.setSettingDataParam({});
  }, []);

  const setPrivacyUserAgree = useCallback(() => {
    TPTradPlusSdk.setPrivacyUserAgree({});
  }, []);

  const setGlobalImpressionListener = useCallback(() => {
    TPTradPlusSdk.setGlobalImpressionListener({
      onImpressionSuccess(info) {
        console.log(info.TPAdInfo);
      },
    });
  }, []);

  const clearCache = useCallback(() => {
    TPTradPlusSdk.clearCache('');
  }, []);

  const setMaxDatabaseSize = useCallback(() => {
    TPTradPlusSdk.setMaxDatabaseSize({ max_db: 10000 });
  }, []);

  const getSdkVersion = useCallback(() => {
    TPTradPlusSdk.getSdkVersion().then(setVersion);
  }, []);

  const checkCurrentArea = useCallback(() => {
    TPTradPlusSdk.checkCurrentArea({
      TPPrivacyListener(info) {
        console.log(info);
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable
          disabled={init}
          style={init ? [styles.btn, { backgroundColor: 'black' }] : pressStyle}
          onPress={initSdk}
        >
          <Text style={styles.label}>initSdk</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={checkCurrentArea}>
          <Text style={styles.label}>checkCurrentArea</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={getSdkVersion}>
          <Text style={styles.label}>{version}</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={setMaxDatabaseSize}>
          <Text style={styles.label}>setMaxDatabaseSize</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={clearCache}>
          <Text style={styles.label}>clearCache</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setGlobalImpressionListener}>
          <Text style={styles.label}>setGlobalImpressionListener</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setPrivacyUserAgree}>
          <Text style={styles.label}>setPrivacyUserAgree</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setSettingDataParam}>
          <Text style={styles.label}>setSettingDataParam</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={isPrivacyUserAgree}>
          <Text style={styles.label}>isPrivacyUserAgree</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setOpenPersonalizedAd}>
          <Text style={styles.label}>setOpenPersonalizedAd</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={isOpenPersonalizedAd}>
          <Text style={styles.label}>isOpenPersonalizedAd</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={isAllowMessagePush}>
          <Text style={styles.label}>isAllowMessagePush</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setAllowMessagePush}>
          <Text style={styles.label}>setAllowMessagePush</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setCnServer}>
          <Text style={styles.label}>setCnServer</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={isDevAllowTracking}>
          <Text style={styles.label}>isDevAllowTracking</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setDevAllowTracking}>
          <Text style={styles.label}>setDevAllowTracking</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={getAuthUID}>
          <Text style={styles.label}>getAuthUID</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={checkAutoExpiration}>
          <Text style={styles.label}>checkAutoExpiration</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setOpenDelayLoadAds}>
          <Text style={styles.label}>setOpenDelayLoadAds</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setAuthUID}>
          <Text style={styles.label}>setAuthUID</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setAutoExpiration}>
          <Text style={styles.label}>setAutoExpiration</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={isCCPADoNotSell}>
          <Text style={styles.label}>isCCPADoNotSell</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setCCPADoNotSell}>
          <Text style={styles.label}>setCCPADoNotSell</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={getGDPRChild}>
          <Text style={styles.label}>getGDPRChild</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setGDPRChild}>
          <Text style={styles.label}>setGDPRChild</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={setTradPlusInitListener}>
          <Text style={styles.label}>setTradPlusInitListener</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setGDPRListener}>
          <Text style={styles.label}>setGDPRListener</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={setPrivacyListener}>
          <Text style={styles.label}>setPrivacyListener</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={getIsInit}>
          <Text style={styles.label}>getIsInit</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setIsCNLanguageLog}>
          <Text style={styles.label}>setIsCNLanguageLog</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setDebugMode}>
          <Text style={styles.label}>setDebugMode</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setGDPRDataCollection}>
          <Text style={styles.label}>setGDPRDataCollection</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={getGDPRDataCollection}>
          <Text style={styles.label}>getGDPRDataCollection</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setLGPDConsent}>
          <Text style={styles.label}>setLGPDConsent</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={getLGPDConsent}>
          <Text style={styles.label}>getLGPDConsent</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setEUTraffic}>
          <Text style={styles.label}>setEUTraffic</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={isEUTraffic}>
          <Text style={styles.label}>isEUTraffic</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setCalifornia}>
          <Text style={styles.label}>setCalifornia</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={isCalifornia}>
          <Text style={styles.label}>isCalifornia</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={showUploadDataNotifyDialog}>
          <Text style={styles.label}>showUploadDataNotifyDialog</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setIsFirstShowGDPR}>
          <Text style={styles.label}>setIsFirstShowGDPR</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={isFirstShowGDPR}>
          <Text style={styles.label}>isFirstShowGDPR</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setCOPPAIsAgeRestrictedUser}>
          <Text style={styles.label}>setCOPPAIsAgeRestrictedUser</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={isCOPPAAgeRestrictedUser}>
          <Text style={styles.label}>isCOPPAAgeRestrictedUser</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Sdk;
