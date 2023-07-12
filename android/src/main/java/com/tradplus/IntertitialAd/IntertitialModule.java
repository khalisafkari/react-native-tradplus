package com.tradplus.IntertitialAd;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.tradplus.ads.open.interstitial.TPInterstitial;
import com.tradplus.utils.ConversionUtil;
import com.tradplus.utils.ModuleName;

import org.jetbrains.annotations.NotNull;

public class IntertitialModule extends ReactContextBaseJavaModule implements LifecycleEventListener {

  private TPInterstitial tpInterstitial;
  private IntertitialListener intertitialListener;

  @NonNull
  @Override
  public String getName() {
    return ModuleName.TPIntertitial;
  }

  public IntertitialModule(@Nullable ReactApplicationContext reactContext) {
    super(reactContext);
    reactContext.addLifecycleEventListener(this);
    intertitialListener = new IntertitialListener(reactContext);
  }

  @ReactMethod
  public void IntertitialInit(@NotNull String unitId) {
    if (tpInterstitial == null) {
      tpInterstitial = new TPInterstitial(getReactApplicationContext(), unitId);
    }
  }

  @ReactMethod
  public void setAdListener() {
    if (tpInterstitial != null) {
      tpInterstitial.setAdListener(intertitialListener.interstitialAdListener);
    }
  }

  @ReactMethod
  public void setAllAdLoadListener() {
    if (tpInterstitial != null) {
      tpInterstitial.setAllAdLoadListener(intertitialListener.loadAdEveryLayerListener);
    }
  }

  @ReactMethod
  public void setDownloadListener() {
    if (tpInterstitial != null) {
      tpInterstitial.setDownloadListener(intertitialListener.downloadListener);
    }
  }

  @ReactMethod
  public void loadAd() {
    tpInterstitial.loadAd();
  }

  @ReactMethod
  public void reloadAd() {
    tpInterstitial.reloadAd();
  }


  @ReactMethod
  public void setCustomShowData(ReadableMap readableMap) {
    tpInterstitial.setCustomShowData(ConversionUtil.convertReadableMapToMap(readableMap));
  }

  @ReactMethod
  public void showAd(@Nullable String entryAdScenario) {
    if (entryAdScenario != null) {
      tpInterstitial.showAd(getCurrentActivity(), entryAdScenario);
    } else {
      tpInterstitial.showAd(getCurrentActivity(), null);
    }
  }

  @ReactMethod(isBlockingSynchronousMethod = true)
  public boolean isReady() {
    return tpInterstitial.isReady();
  }

  @ReactMethod
  public void isReadyAsync(Promise promise) {
    promise.resolve(tpInterstitial.isReady());
  }

  @ReactMethod
  public void entryAdScenario(@Nullable String entryAdScenario) {
    tpInterstitial.entryAdScenario(entryAdScenario);
  }

  @ReactMethod
  public void setCustomParams(ReadableMap readableMap) {
    tpInterstitial.setCustomParams(ConversionUtil.convertReadableMapToMap(readableMap));
  }

  @ReactMethod
  public void setNetworkExtObj(ReadableMap readableMap) {
    tpInterstitial.setNetworkExtObj((Object) readableMap);
  }


  @ReactMethod
  public void addListener(String eventName) {}

  @ReactMethod
  public void removeListeners(Integer count) {}


  @Override
  public void onHostResume() {

  }

  @Override
  public void onHostPause() {

  }

  @Override
  public void onHostDestroy() {
      if (tpInterstitial != null) {
        tpInterstitial.onDestroy();
      }
  }
}
