import React, { useCallback } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import styles, { pressStyle } from './styles';
import { TPSplash } from 'react-native-tradplus';

const SplashAd = () => {
  const splashInit = useCallback(() => {
    TPSplash.splashInit('D9118E91DD06DF6D322369455CAED618');
  }, []);

  const loadAd = useCallback(() => {
    TPSplash.loadAd();
  }, []);

  const showAdNull = useCallback(() => {
    TPSplash.showAdNull();
  }, []);

  const showAd = useCallback(() => {
    TPSplash.showAd();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable style={pressStyle} onPress={splashInit}>
          <Text style={styles.label}>splashInit</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={loadAd}>
          <Text style={styles.label}>loadAd</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={showAdNull}>
          <Text style={styles.label}>showAdNull</Text>
        </Pressable>

        <Pressable style={pressStyle} onPress={showAd}>
          <Text style={styles.label}>showAd</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default SplashAd;
