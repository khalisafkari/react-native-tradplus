import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import { TPTradPlusSdk } from 'react-native-tradplus';

const App = (props: any) => {
  useEffect(() => {
    TPTradPlusSdk.initSdk('44273068BFF4D8A8AFF3D5B11CBA3ADE');
    //TPReward.RewardInit('39DAC7EAC046676C5404004A311D1DB1');
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btn}
        onPress={() => {
          props.navigator.push(
            'com.sdk',
            {},
            {
              titleItem: {
                title: 'SDK',
              },
            }
          );
        }}
      >
        <Text style={styles.label}>TPSDK</Text>
      </Pressable>

      <Pressable
        style={styles.btn}
        onPress={() => {
          props.navigator.push(
            'com.reward',
            {},
            {
              titleItem: {
                title: 'RewardAd',
              },
            }
          );
        }}
      >
        <Text style={styles.label}>TPReward</Text>
      </Pressable>

      <Pressable
        style={styles.btn}
        onPress={() => {
          props.navigator.push(
            'com.splash',
            {},
            {
              titleItem: {
                title: 'TPSplash',
              },
            }
          );
        }}
      >
        <Text style={styles.label}>TPSplash</Text>
      </Pressable>

      <Pressable
        style={styles.btn}
        onPress={() => {
          props.navigator.push(
            'com.banner',
            {},
            {
              titleItem: {
                title: 'BannerAd',
              },
            }
          );
        }}
      >
        <Text style={styles.label}>BannerAd</Text>
      </Pressable>

      <Pressable
        style={styles.btn}
        onPress={() => {
          props.navigator.push(
            'com.intertitial',
            {},
            {
              titleItem: {
                title: 'IntertitialAd',
              },
            }
          );
        }}
      >
        <Text style={styles.label}>IntertitialAd</Text>
      </Pressable>

      <Pressable
        style={styles.btn}
        onPress={() => {
          props.navigator.push(
            'com.native',
            {},
            {
              titleItem: {
                title: 'NativeAd',
              },
            }
          );
        }}
      >
        <Text style={styles.label}>NativeAd</Text>
      </Pressable>
    </View>
  );
};

export default App;
