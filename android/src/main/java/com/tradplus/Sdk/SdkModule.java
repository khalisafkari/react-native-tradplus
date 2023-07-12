package com.tradplus.Sdk;

import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.tradplus.ads.base.Const;
import com.tradplus.ads.open.TradPlusSdk;
import com.tradplus.utils.ConversionUtil;
import com.tradplus.utils.ModuleName;
import com.tradplus.utils.TPListener;

import java.util.Map;

public class SdkModule extends ReactContextBaseJavaModule {

  TPListener tpListener;

  @NonNull
  @Override
  public String getName() {
    return ModuleName.TradPlusSdk;
  }

  public SdkModule(@Nullable ReactApplicationContext reactContext) {
    super(reactContext);
    tpListener = new TPListener(reactContext);
  }


  @ReactMethod
  public void initSdk(@NonNull  String var1) {
    TradPlusSdk.initSdk(getReactApplicationContext(), var1);
  }

  @ReactMethod
  public void setTradPlusInitListener() {
    TradPlusSdk.setTradPlusInitListener(tpListener.tradPlusInitListener);
  }

  @ReactMethod
  public void setGDPRListener() {
    TradPlusSdk.setGDPRListener(tpListener.tpgdprListener);
  }

  @ReactMethod
  public void setPrivacyListener() {
    TradPlusSdk.setPrivacyListener(tpListener.tpPrivacyListener);
  }

  @ReactMethod
  public void getIsInit(Promise promise) {
    boolean b = TradPlusSdk.getIsInit();
    promise.resolve(b);
  }

  @ReactMethod
  public void setIsCNLanguageLog(@NonNull Boolean b) {
    TradPlusSdk.setIsCNLanguageLog(b);
  }

  @ReactMethod
  public void setDebugMode(@NonNull Boolean var0) {
    TradPlusSdk.setDebugMode(var0);
  }


  @ReactMethod
  public void setGDPRDataCollection(@NonNull Integer i) {
    TradPlusSdk.setGDPRDataCollection(getReactApplicationContext(), i);
  }


  @ReactMethod
  public void getGDPRDataCollection(Promise promise) {
    Integer b = TradPlusSdk.getGDPRDataCollection(getReactApplicationContext());
    promise.resolve(b);
  }

  @ReactMethod
  public void setLGPDConsent(@NonNull Integer i) {
    TradPlusSdk.setLGPDConsent(getReactApplicationContext(), i);
  }

  @ReactMethod
  public void getLGPDConsent(Promise promise) {
    Integer i = TradPlusSdk.getLGPDConsent(getReactApplicationContext());
    promise.resolve(i);
  }

  @ReactMethod
  public void setEUTraffic(@NonNull Boolean b) {
    TradPlusSdk.setEUTraffic(getReactApplicationContext(), b);
  }

  @ReactMethod
  public void isEUTraffic(Promise promise) {
    boolean b = TradPlusSdk.isEUTraffic(getReactApplicationContext());
    promise.resolve(b);
  }

  @ReactMethod
  public void setCalifornia(@NonNull Boolean b) {
    TradPlusSdk.setCalifornia(getReactApplicationContext(), b);
  }

  @ReactMethod
  public void isCalifornia(Promise promise) {
    boolean b = TradPlusSdk.isCalifornia(getReactApplicationContext());
    promise.resolve(b);
  }

  @ReactMethod
  public void showUploadDataNotifyDialog(@Nullable String url, Promise promise) {
    TradPlusSdk
      .showUploadDataNotifyDialog(getReactApplicationContext(), new TradPlusSdk.TPGDPRAuthListener() {
        @Override
        public void onAuthResult(int i) {
          promise.resolve(i);
        }
      },Const.URL.GDPR_URL);
  }

  @ReactMethod
  public void setIsFirstShowGDPR(@NonNull Boolean e) {
    TradPlusSdk.setIsFirstShowGDPR(getReactApplicationContext(), e);
  }

  @ReactMethod
  public void isFirstShowGDPR(Promise promise) {
    Boolean b = TradPlusSdk.isFirstShowGDPR(getReactApplicationContext());
    promise.resolve(b);
  }

  @ReactMethod
  public void setCOPPAIsAgeRestrictedUser(@NonNull Boolean e) {
    TradPlusSdk.setCOPPAIsAgeRestrictedUser(getReactApplicationContext(), e);
  }

  @ReactMethod
  public void isCOPPAAgeRestrictedUser(Promise promise) {
    Integer b = TradPlusSdk.isCOPPAAgeRestrictedUser(getReactApplicationContext());
    promise.resolve(b);
  }

  @ReactMethod
  public void setGDPRChild(@NonNull Boolean e) {
    TradPlusSdk.setGDPRChild(getReactApplicationContext(), e);
  }

  @ReactMethod
  public void getGDPRChild(Promise promise) {
    Boolean b = TradPlusSdk.getGDPRChild(getReactApplicationContext());
    promise.resolve(b);
  }

  @ReactMethod
  public void setCCPADoNotSell(@NonNull Boolean b) {
    TradPlusSdk.setCCPADoNotSell(getReactApplicationContext(), b);
  }

  @ReactMethod
  public void isCCPADoNotSell(Promise promise) {
    Integer b = TradPlusSdk.isCCPADoNotSell(getReactApplicationContext());
    promise.resolve(b);
  }

  @ReactMethod
  public void setAutoExpiration(@NonNull Boolean b) {
    TradPlusSdk.setAutoExpiration(b);
  }

  @ReactMethod
  public void setAuthUID(@NonNull Boolean b) {
    TradPlusSdk.setAuthUID(getReactApplicationContext(), b);
  }

  @ReactMethod
  public void setOpenDelayLoadAds(@NonNull Boolean t) {
    TradPlusSdk.setOpenDelayLoadAds(t);
  }


  @ReactMethod
  public void checkAutoExpiration() {
    TradPlusSdk.checkAutoExpiration();
  }

  @ReactMethod
  public void getAuthUID(Promise promise) {
    Boolean b = TradPlusSdk.getAuthUID(getReactApplicationContext());
    promise.resolve(b);
  }

  @ReactMethod
  public void setDevAllowTracking(@NonNull Boolean b) {
    TradPlusSdk.setDevAllowTracking(b);
  }

  @ReactMethod
  public void isDevAllowTracking(Promise p) {
    Boolean b = TradPlusSdk.isDevAllowTracking();
    p.resolve(b);
  }

  @ReactMethod
  public void setCnServer(@NonNull Boolean e) {
    TradPlusSdk.setCnServer(e);
  }

  @ReactMethod
  public void setAllowMessagePush(@NonNull Boolean b) {
    TradPlusSdk.setAllowMessagePush(b);
  }

  @ReactMethod
  public void isAllowMessagePush(Promise promise) {
    Boolean b = TradPlusSdk.isAllowMessagePush();
    promise.resolve(b);
  }

  @ReactMethod
  public void isOpenPersonalizedAd(Promise promise) {
    Boolean b = TradPlusSdk.isOpenPersonalizedAd();
    promise.resolve(b);
  }

  @ReactMethod
  public void setOpenPersonalizedAd(@NonNull Boolean b) {
    TradPlusSdk.setOpenPersonalizedAd(b);
  }

  @ReactMethod
  public void isPrivacyUserAgree(Promise promise) {
    Boolean b = TradPlusSdk.isPrivacyUserAgree();
    promise.resolve(b);
  }

  @ReactMethod
  public void setSettingDataParam(@NonNull ReadableMap obj) {
    Map<String , Object> map = ConversionUtil.convertReadableMapToMap(obj);
    TradPlusSdk.setSettingDataParam(map);
  }

  @ReactMethod
  public void setPrivacyUserAgree(@NonNull Boolean var0) {
    Log.i("UserAgree", "privacyUserAgree: ".concat(String.valueOf(var0)));
    TradPlusSdk.setPrivacyUserAgree(var0);
  }

  @ReactMethod
  public void setGlobalImpressionListener() {
    TradPlusSdk.setGlobalImpressionListener(tpListener.globalImpressionListener);
  }

  @ReactMethod
  public void clearCache(@NonNull String var0) {
    TradPlusSdk.clearCache(var0);
  }

  @ReactMethod
  public void setMaxDatabaseSize(@NonNull ReadableMap obj) {
    String st = obj.getString("max_db");
    Long l = Long.parseLong(st);
    TradPlusSdk.setMaxDatabaseSize(l);
  }

  @ReactMethod
  public void getSdkVersion(Promise promise) {
    String st = TradPlusSdk.getSdkVersion();
    promise.resolve(st);
  }

  @ReactMethod
  public void checkCurrentArea() {
    TradPlusSdk.checkCurrentArea(getReactApplicationContext(), tpListener.onPrivacyRegionListener);
  }


  @ReactMethod
  public void addListener(String eventName) {}

  @ReactMethod
  public void removeListeners(Integer count) {}
}
