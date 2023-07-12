import React, { useCallback } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { TPIntertitial } from 'react-native-tradplus';
import styles, { pressStyle } from './styles';

const IntertitialAd = () => {
  const setAdListener = useCallback(() => {
    TPIntertitial.setAdListener({
      onAdClicked(TPAdInfo) {
        console.log('onAdClicked', TPAdInfo);
      },
      onAdLoaded: function (TPAdInfo): void {
        console.log('onAdLoaded', TPAdInfo);
      },
      onAdImpression: function (TPAdInfo): void {
        console.log('onAdImpression', TPAdInfo);
      },
      onAdFailed: function (TPAdError): void {
        console.log('onAdFailed', TPAdError);
      },
      onAdClosed: function (TPAdInfo): void {
        console.log('onAdClosed', TPAdInfo);
      },
      onAdReward: function (TPAdInfo): void {
        console.log('onAdReward', TPAdInfo);
      },
      onAdVideoStart: function (TPAdInfo): void {
        console.log('onAdVideoStart', TPAdInfo);
      },
      onAdVideoEnd: function (TPAdInfo): void {
        console.log('onAdVideoEnd', TPAdInfo);
      },
      onAdVideoError: function (TPAdInfo): void {
        console.log('onAdVideoError', TPAdInfo);
      },
    });
  }, []);

  const setAllAdLoadListener = useCallback(() => {
    TPIntertitial.setAllAdLoadListener({
      onAdAllLoaded: function (info): void {
        console.log('onAdAllLoaded', info);
      },
      onAdStartLoad: function (info): void {
        console.log('onAdStartLoad', info);
      },
      oneLayerLoadFailed: function (info): void {
        console.log('oneLayerLoadFailed', info);
      },
      oneLayerLoaded: function (info): void {
        console.log('oneLayerLoaded', info);
      },
      oneLayerLoadStart: function (info): void {
        console.log('oneLayerLoadStart', info);
      },
      onBiddingStart: function (info): void {
        console.log('onBiddingStart', info);
      },
      onBiddingEnd: function (info): void {
        console.log('onBiddingEnd', info);
      },
      onAdIsLoading: function (info): void {
        console.log('onAdIsLoading', info);
      },
    });
  }, []);

  const setDownloadListener = useCallback(() => {
    TPIntertitial.setDownloadListener({
      onDownloadStart: function (info): void {
        console.log('onDownloadStart');
        console.log(info);
      },
      onDownloadUpdate: function (info): void {
        console.log('onDownloadUpdate');
        console.log(info);
      },
      onDownloadPause: function (info): void {
        console.log('onDownloadPause');
        console.log(info);
      },
      onDownloadFinish: function (info): void {
        console.log('onDownloadFinish');
        console.log(info);
      },
      onDownloadFail: function (info): void {
        console.log('onDownloadFail');
        console.log(info);
      },
      onInstalled: function (info): void {
        console.log('onInstalled');
        console.log(info);
      },
    });
  }, []);

  const IntertitialInit = useCallback(() => {
    TPIntertitial.IntertitialInit('E609A0A67AF53299F2176C3A7783C46D');
  }, []);

  const loadAd = useCallback(() => {
    TPIntertitial.loadAd();
  }, []);

  const reloadAd = useCallback(() => {
    TPIntertitial.reloadAd();
  }, []);
  const setCustomShowData = useCallback(() => {
    TPIntertitial.setCustomShowData({});
  }, []);
  const showAd = useCallback(() => {
    //177010A4403105
    TPIntertitial.showAd();
  }, []);
  const isReady = useCallback(() => {
    const r = TPIntertitial.isReady();
    console.log('isReady', r);
  }, []);
  const isReadyAsync = useCallback(() => {
    TPIntertitial.isReadyAsync().then((r) => {
      console.log('isReadyAsync', r);
    });
  }, []);
  const entryAdScenario = useCallback(() => {
    TPIntertitial.entryAdScenario('177010A4403105');
  }, []);

  const setCustomParams = useCallback(() => {
    TPIntertitial.setCustomParams({});
  }, []);
  const setNetworkExtObj = useCallback(() => {
    TPIntertitial.setNetworkExtObj({});
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable style={pressStyle} onPress={setAdListener}>
          <Text style={styles.label}>setAdListener</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={setAllAdLoadListener}>
          <Text style={styles.label}>setAllAdLoadListener</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setDownloadListener}>
          <Text style={styles.label}>setDownloadListener</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={IntertitialInit}>
          <Text style={styles.label}>IntertitialInit</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={loadAd}>
          <Text style={styles.label}>loadAd</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={reloadAd}>
          <Text style={styles.label}>reloadAd</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={setCustomShowData}>
          <Text style={styles.label}>setCustomShowData</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={showAd}>
          <Text style={styles.label}>showAd</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={isReady}>
          <Text style={styles.label}>isReady</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={isReadyAsync}>
          <Text style={styles.label}>isReadyAsync</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={entryAdScenario}>
          <Text style={styles.label}>entryAdScenario</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={setCustomParams}>
          <Text style={styles.label}>setCustomParams</Text>
        </Pressable>
        <Pressable style={pressStyle} onPress={setNetworkExtObj}>
          <Text style={styles.label}>setNetworkExtObj</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default IntertitialAd;
