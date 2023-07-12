package com.tradplus.RewardAd;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.tradplus.ads.base.bean.TPAdInfo;

public class Utils {

  public static WritableMap tpInfo(TPAdInfo tpAdInfo) {
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

    return  map1;
  }

}
