package com.tradplus.utils;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ConversionUtil {

  public static HashMap<String, Object> convertReadableMapToHashMap(ReadableMap readableMap) {
    HashMap<String, Object> hashMap = new HashMap<>();
    ReadableMapKeySetIterator iterator = readableMap.keySetIterator();

    while (iterator.hasNextKey()) {
      String key = iterator.nextKey();
      Object value = convertReadableValueToObject(readableMap, key);
      hashMap.put(key, value);
    }

    return hashMap;
  }
  public static Map<String, Object> convertReadableMapToMap(ReadableMap readableMap) {
    Map<String, Object> map = new HashMap<>();
    ReadableMapKeySetIterator iterator = readableMap.keySetIterator();

    while (iterator.hasNextKey()) {
      String key = iterator.nextKey();
      Object value = convertReadableValueToObject(readableMap, key);
      map.put(key, value);
    }

    return map;
  }

  private static Object convertReadableValueToObject(ReadableMap readableMap, String key) {
    switch (readableMap.getType(key)) {
      case Null:
        return null;
      case Boolean:
        return readableMap.getBoolean(key);
      case Number:
        return readableMap.getDouble(key);
      case String:
        return readableMap.getString(key);
      case Map:
        return convertReadableMapToMap(readableMap.getMap(key));
      case Array:
        return convertReadableArrayToList(readableMap.getArray(key));
      default:
        return null;
    }
  }

  private static List<Object> convertReadableArrayToList(ReadableArray readableArray) {
    List<Object> list = new ArrayList<>();

    for (int i = 0; i < readableArray.size(); i++) {
      ReadableType type = readableArray.getType(i);
      Object value = convertReadableValueToObject(readableArray, type, i);
      list.add(value);
    }

    return list;
  }

  private static Object convertReadableValueToObject(ReadableArray readableArray, ReadableType type, int index) {
    switch (type) {
      case Null:
        return null;
      case Boolean:
        return readableArray.getBoolean(index);
      case Number:
        return readableArray.getDouble(index);
      case String:
        return readableArray.getString(index);
      case Map:
        return convertReadableMapToMap(readableArray.getMap(index));
      case Array:
        return convertReadableArrayToList(readableArray.getArray(index));
      default:
        return null;
    }
  }
}
