package com.tradplus.SplashAd;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.views.view.ReactViewGroup;
import com.tradplus.ads.open.splash.TPSplash;
import com.tradplus.utils.ModuleName;

import org.jetbrains.annotations.NotNull;

public class SplashModule extends ReactContextBaseJavaModule implements LifecycleEventListener {

  private TPSplash tpSplash;

  @NonNull
  @Override
  public String getName() {
    return ModuleName.TPSplash;
  }

  public SplashModule(@Nullable ReactApplicationContext reactContext) {
    super(reactContext);
    reactContext.addLifecycleEventListener(this);
  }

  @ReactMethod
  public void splashInit(@NotNull String adId) {
    if (tpSplash == null) {
      tpSplash = new TPSplash(getCurrentActivity(), adId);
    }
  }

  @ReactMethod
  public void setAdListener() {

  }

  @ReactMethod
  public void setAllAdLoadListener() {

  }

  @ReactMethod
  public void loadAd() {
    if (tpSplash != null) {
      tpSplash.loadAd(null);
    }
  }

  @ReactMethod
  public void showAdNull() {
    if (tpSplash != null) {
      tpSplash.showAd();
    }
  }



  @ReactMethod(isBlockingSynchronousMethod = true)
  public boolean isReady() {
    return tpSplash.isReady();
  }

  @ReactMethod
  public void isReadyAsync(Promise promise) {
    promise.resolve(tpSplash.isReady());
  }

  @ReactMethod
  public void setDownloadListener() {

  }

  public void setNativeAdRender() {

  }

  @ReactMethod
  public void setCustomShowData() {

  }

  @ReactMethod
  public void setCustomParams() {

  }

  @ReactMethod
  public void showAd() {
    UiThreadUtil.assertOnUiThread();
    ReactViewGroup reactViewGroup = new ReactViewGroup(getCurrentActivity());
    tpSplash.showAd(reactViewGroup);
  }

  @ReactMethod
  public void setDefaultConfig() {

  }

  @ReactMethod
  public void setNetworkExtObj() {}

  @Override
  public void onHostResume() {

  }

  @Override
  public void onHostPause() {

  }

  @Override
  public void onHostDestroy() {
      if (tpSplash != null) {
        tpSplash.onDestroy();
      }
  }
}
