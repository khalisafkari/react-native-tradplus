package com.tradplus.utils;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.tradplus.ads.base.bean.TPAdInfo;
import com.tradplus.ads.base.common.TPPrivacyManager;
import com.tradplus.ads.base.network.response.ConfigResponse;
import com.tradplus.ads.core.GlobalImpressionManager;
import com.tradplus.ads.open.TradPlusSdk;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Map;

public class TPListener {

  ReactApplicationContext mContext;

  public TPListener(ReactApplicationContext context) {
    mContext = context;
  }

  public void sendEvent(@NotNull String eventName, @Nullable WritableMap map) {
      mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit(eventName, map);
  }

  public TradPlusSdk.TradPlusInitListener tradPlusInitListener = new TradPlusSdk.TradPlusInitListener() {
    @Override
    public void onInitSuccess() {
        sendEvent("onInitSuccess", null);
    }
  };

  public GlobalImpressionManager.GlobalImpressionListener globalImpressionListener = new GlobalImpressionManager.GlobalImpressionListener() {
    @Override
    public void onImpressionSuccess(TPAdInfo tpAdInfo) {
      WritableMap map = Arguments.createMap();
      WritableMap map1 = Arguments.createMap();
      map1.putString("tpAdUnitId", tpAdInfo.tpAdUnitId);
      map1.putString("adSourceName", tpAdInfo.adSourceName);
      map1.putString("adNetworkId", tpAdInfo.adNetworkId);
      map1.putString("adSourceId", tpAdInfo.adSourceId);
      map1.putString("ecmp", tpAdInfo.ecpm);
      map1.putString("ecpmcny", tpAdInfo.ecpmcny);
      map1.putString("ecpmLevel", tpAdInfo.ecpmLevel);
      map1.putString("ecpmPrecision", tpAdInfo.ecpmPrecision);
      map1.putString("loadTime", String.valueOf(tpAdInfo.loadTime));
      map1.putString("rewardName", tpAdInfo.rewardName);
      map1.putInt("rewardNumber", tpAdInfo.rewardNumber);
      map1.putString("isoCode", tpAdInfo.isoCode);
      map1.putInt("height", tpAdInfo.height);
      map1.putInt("adViewHeight", tpAdInfo.adViewHeight);
      map1.putInt("adViewWidth", tpAdInfo.adViewWidth);
      map1.putInt("width", tpAdInfo.width);

      // i dont know work or not
      // map1.putMap("rewardVerifyMap", (ReadableMap) tpAdInfo.rewardVerifyMap);
      // map1.putMap("customShowData", (ReadableMap) tpAdInfo.customShowData);
      // map1.putMap("impPaidData", (ReadableMap) tpAdInfo.impPaidData);
      // ============

      map1.putBoolean("isBiddingNetwork", tpAdInfo.isBiddingNetwork);
      map1.putInt("waterfallIndex", tpAdInfo.waterfallIndex);
      map1.putString("requestId", tpAdInfo.requestId);
      map1.putString("subChannel", tpAdInfo.subChannel);
      map1.putString("channel", tpAdInfo.channel);
      map1.putString("sceneId", tpAdInfo.sceneId);
      map1.putString("configString", tpAdInfo.configString);
      map1.putString("format", tpAdInfo.format);
      map1.putString("bucketId", tpAdInfo.bucketId);
      map1.putString("segmentId", tpAdInfo.segmentId);
      map1.putString("adSourcePlacementId", tpAdInfo.adSourcePlacementId);

      map1.putInt("placementAdType", tpAdInfo.placementAdType);
      map1.putBoolean("isBottom", tpAdInfo.isBottom);

      // not implemnet
      // public ConfigResponse.WaterfallBean.ConfigBean configBean;


      map.putMap("TPAdInfo", map1);
      sendEvent("onImpressionSuccess", map);
    }
  };

  public TradPlusSdk.TPGDPRListener tpgdprListener = new TradPlusSdk.TPGDPRListener() {
    @Override
    public void success(String msg) {
        WritableMap map = Arguments.createMap();
        map.putString("success", msg);
        sendEvent("TPGDPRListener", map);
    }

    @Override
    public void failed(String msg) {
      WritableMap map = Arguments.createMap();
      map.putString("failed", msg);
      sendEvent("TPGDPRListener", map);
    }
  };

  public TradPlusSdk.TPPrivacyListener tpPrivacyListener = new TradPlusSdk.TPPrivacyListener() {
    @Override
    public void success(String msg) {
      WritableMap map = Arguments.createMap();
      map.putString("success", msg);
      sendEvent("TPPrivacyListener", map);
    }

    @Override
    public void failed(String msg) {
      WritableMap map = Arguments.createMap();
      map.putString("failed", msg);
      sendEvent("TPPrivacyListener", map);
    }
  };

  public TPPrivacyManager.OnPrivacyRegionListener onPrivacyRegionListener = new TPPrivacyManager.OnPrivacyRegionListener() {
    @Override
    public void onSuccess(boolean isEu, boolean isCn, boolean isCalifornia) {
      WritableMap map = Arguments.createMap();
      WritableMap msg = Arguments.createMap();
      msg.putBoolean("isEu", isEu);
      map.putBoolean("isCn", isCn);
      map.putBoolean("isCalifornia", isCalifornia);
      map.putMap("onSuccess", msg);
      sendEvent("TPPrivacyListener", map);
    }

    @Override
    public void onFailed() {
      WritableMap map = Arguments.createMap();
      map.putNull("onFailed");
      sendEvent("TPPrivacyListener", map);
    }
  };
}
