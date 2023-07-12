package com.tradplus.IntertitialAd;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.tradplus.RewardAd.Utils;
import com.tradplus.ads.base.bean.TPAdError;
import com.tradplus.ads.base.bean.TPAdInfo;
import com.tradplus.ads.open.DownloadListener;
import com.tradplus.ads.open.LoadAdEveryLayerListener;
import com.tradplus.ads.open.interstitial.InterstitialAdListener;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class IntertitialListener {

  ReactApplicationContext mContext;

  public IntertitialListener(ReactApplicationContext context) {
    mContext = context;
  }

  public void sendEvent(@NotNull String eventName, @Nullable WritableMap map) {
    mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
      .emit(eventName, map);
  }

  public InterstitialAdListener interstitialAdListener = new InterstitialAdListener() {
    @Override
    public void onAdLoaded(TPAdInfo tpAdInfo) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));
      sendEvent("onAdLoaded", map);
    }

    @Override
    public void onAdFailed(TPAdError tpAdError) {
      WritableMap map = Arguments.createMap();
      WritableMap map1 = Arguments.createMap();
      map1.putString("message", tpAdError.getErrorMsg());
      map1.putInt("code", tpAdError.getErrorCode());
      map.putMap("TPAdError", map1);
      sendEvent("onAdFailed", map);
    }

    @Override
    public void onAdImpression(TPAdInfo tpAdInfo) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));
      sendEvent("onAdImpression", map);
    }

    @Override
    public void onAdClicked(TPAdInfo tpAdInfo) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));
      sendEvent("onAdLoaded", map);
    }

    @Override
    public void onAdClosed(TPAdInfo tpAdInfo) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));
      sendEvent("onAdClosed", map);
    }

    @Override
    public void onAdVideoError(TPAdInfo tpAdInfo, TPAdError tpAdError) {
      WritableMap map = Arguments.createMap();
      WritableMap map1 = Arguments.createMap();
      map1.putString("message", tpAdError.getErrorMsg());
      map1.putInt("code", tpAdError.getErrorCode());
      map.putMap("TPAdError", map1);
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));
      sendEvent("onAdVideoError", map);
    }

    @Override
    public void onAdVideoStart(TPAdInfo tpAdInfo) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));
      sendEvent("onAdVideoStart", map);
    }

    @Override
    public void onAdVideoEnd(TPAdInfo tpAdInfo) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));
      sendEvent("onAdVideoEnd", map);
    }
  };

  public LoadAdEveryLayerListener loadAdEveryLayerListener = new LoadAdEveryLayerListener() {
    @Override
    public void onAdAllLoaded(boolean b) {
      WritableMap map = Arguments.createMap();
      map.putBoolean("s", b);
      sendEvent("onAdAllLoaded", map);
    }

    @Override
    public void oneLayerLoadFailed(TPAdError tpAdError, TPAdInfo tpAdInfo) {
      WritableMap map = Arguments.createMap();
      WritableMap map1 = Arguments.createMap();
      map1.putString("message", tpAdError.getErrorMsg());
      map1.putInt("code", tpAdError.getErrorCode());
      map.putMap("TPAdError", map1);
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));
      sendEvent("oneLayerLoadFailed", map);
    }

    @Override
    public void oneLayerLoaded(TPAdInfo tpAdInfo) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));
      sendEvent("oneLayerLoaded", map);
    }

    @Override
    public void onAdStartLoad(String s) {
      WritableMap map = Arguments.createMap();
      map.putString("s", s);
      sendEvent("onAdStartLoad", map);
    }

    @Override
    public void oneLayerLoadStart(TPAdInfo tpAdInfo) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));
      sendEvent("oneLayerLoadStart", map);
    }

    @Override
    public void onBiddingStart(TPAdInfo tpAdInfo) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));
      sendEvent("onBiddingStart", map);
    }

    @Override
    public void onBiddingEnd(TPAdInfo tpAdInfo, TPAdError tpAdError) {
      WritableMap map = Arguments.createMap();
      WritableMap map1 = Arguments.createMap();
      map1.putString("message", tpAdError.getErrorMsg());
      map1.putInt("code", tpAdError.getErrorCode());
      map.putMap("TPAdError", map1);
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));
      sendEvent("onBiddingEnd", map);
    }

    @Override
    public void onAdIsLoading(String s) {
      WritableMap map = Arguments.createMap();
      map.putString("s", s);
      sendEvent("onAdIsLoading", map);
    }
  };

  public DownloadListener downloadListener = new DownloadListener() {
    @Override
    public void onDownloadStart(TPAdInfo tpAdInfo, long totalBytes, long currBytes, String fileName, String appName) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));

      map.putString("totalBytes", String.valueOf(totalBytes));
      map.putString("currBytes", String.valueOf(currBytes));
      map.putString("fileName", fileName);
      map.putString("appName", appName);

      sendEvent("onDownloadStart", map);
    }

    @Override
    public void onDownloadUpdate(TPAdInfo tpAdInfo, long totalBytes, long currBytes, String fileName, String appName,int progress) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));

      map.putString("totalBytes", String.valueOf(totalBytes));
      map.putString("currBytes", String.valueOf(currBytes));
      map.putString("fileName", fileName);
      map.putString("appName", appName);
      map.putInt("progress", progress);

      sendEvent("onDownloadUpdate", map);
    }

    @Override
    public void onDownloadPause(TPAdInfo tpAdInfo, long totalBytes, long currBytes, String fileName, String appName) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));

      map.putString("totalBytes", String.valueOf(totalBytes));
      map.putString("currBytes", String.valueOf(currBytes));
      map.putString("fileName", fileName);
      map.putString("appName", appName);

      sendEvent("onDownloadPause", map);
    }

    @Override
    public void onDownloadFinish(TPAdInfo tpAdInfo, long totalBytes, long currBytes, String fileName, String appName) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));

      map.putString("totalBytes", String.valueOf(totalBytes));
      map.putString("currBytes", String.valueOf(currBytes));
      map.putString("fileName", fileName);
      map.putString("appName", appName);

      sendEvent("onDownloadFinish", map);
    }

    @Override
    public void onDownloadFail(TPAdInfo tpAdInfo, long totalBytes, long currBytes, String fileName, String appName) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));

      map.putString("totalBytes", String.valueOf(totalBytes));
      map.putString("currBytes", String.valueOf(currBytes));
      map.putString("fileName", fileName);
      map.putString("appName", appName);

      sendEvent("onDownloadFail", map);
    }

    @Override
    public void onInstalled(TPAdInfo tpAdInfo, long totalBytes, long currBytes, String fileName, String appName) {
      WritableMap map = Arguments.createMap();
      map.putMap("TPAdInfo", Utils.tpInfo(tpAdInfo));

      map.putString("totalBytes", String.valueOf(totalBytes));
      map.putString("currBytes", String.valueOf(currBytes));
      map.putString("fileName", fileName);
      map.putString("appName", appName);

      sendEvent("onInstalled", map);
    }
  };


}
