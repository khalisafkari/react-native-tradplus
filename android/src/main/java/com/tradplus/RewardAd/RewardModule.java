package com.tradplus.RewardAd;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.tradplus.ads.open.reward.TPReward;
import com.tradplus.utils.ConversionUtil;
import com.tradplus.utils.ModuleName;

import org.jetbrains.annotations.NotNull;

import java.util.HashMap;

public class RewardModule extends ReactContextBaseJavaModule implements LifecycleEventListener {

  private TPReward tpReward;
  RewardListener rewardListener;

  @NonNull
  @Override
  public String getName() {
    return ModuleName.TPReward;
  }

  public RewardModule(@Nullable ReactApplicationContext reactContext) {
    super(reactContext);
    reactContext.addLifecycleEventListener(this);
    rewardListener = new RewardListener(reactContext);
  }

  @ReactMethod
  public void setAdListener() {
    if (tpReward != null) {
      tpReward.setAdListener(rewardListener.rewardAdListener);
    }
  }

  @ReactMethod
  public void setAllAdLoadListener() {
    if (tpReward != null) {
      tpReward.setAllAdLoadListener(rewardListener.loadAdEveryLayerListener);
    }
  }

  @ReactMethod
  public void setDownloadListener() {
    if (tpReward != null) {
      tpReward.setDownloadListener(rewardListener.downloadListener);
    }
  }

  @ReactMethod
  public void setRewardAdExListener() {
    if (tpReward != null) {
      tpReward.setRewardAdExListener(rewardListener.rewardAdExListener);
    }
  }

  @ReactMethod
  public void RewardInit(@NotNull String unitId) {
    tpReward = new TPReward(getReactApplicationContext(), unitId);
  }

  @ReactMethod
  public void loadAd() {
    tpReward.loadAd();
  }

  @ReactMethod
  public void reloadAd() {
    tpReward.reloadAd();
  }

  @ReactMethod
  public void setCustomShowData(ReadableMap readableMap) {
    tpReward.setCustomShowData(ConversionUtil.convertReadableMapToMap(readableMap));
  }

  @ReactMethod
  public void showAd(@Nullable String entryAdScenario) {
    if (entryAdScenario != null) {
      tpReward.showAd(getCurrentActivity(), entryAdScenario);
    } else {
      tpReward.showAd(getCurrentActivity(), null);
    }
  }

  @ReactMethod(isBlockingSynchronousMethod = true)
  public boolean isReady() {
    return tpReward.isReady();
  }

  @ReactMethod
  public void isReadyAsync(Promise promise) {
      promise.resolve(tpReward.isReady());
  }

  @ReactMethod
  public void entryAdScenario(@Nullable String entryAdScenario) {
    tpReward.entryAdScenario(entryAdScenario);
  }

  @ReactMethod
  public void setCustomParams(ReadableMap readableMap) {
    tpReward.setCustomParams(ConversionUtil.convertReadableMapToMap(readableMap));
  }

  @ReactMethod
  public void setNetworkExtObj(ReadableMap readableMap) {
    tpReward.setNetworkExtObj((Object) readableMap);
  }

  @ReactMethod
  public void clearCacheAd() {
    tpReward.clearCacheAd();
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
      if (tpReward != null) {
          tpReward.onDestroy();
      }
  }
}
