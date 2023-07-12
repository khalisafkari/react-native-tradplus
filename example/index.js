// import { AppRegistry } from 'react-native';

// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import Navigation, { BarStyleLightContent } from 'hybrid-navigation';
import App from './src/App';
import Sdk from './src/Sdk';
import Reward from './src/Reward';
import Splash from './src/SplashAd';

import BannerAd from './src/BannerAd';
import IntertitialAd from './src/Intertitial';
import NativeAd from './src/NativeAd';

Navigation.setDefaultOptions({
  topBarStyle: BarStyleLightContent,
  tabBarColor: 'black',
  tabBarItemColor: 'white',
});

Navigation.startRegisterComponent();

Navigation.registerComponent('com.home', () => App);
Navigation.registerComponent('com.sdk', () => Sdk);
Navigation.registerComponent('com.reward', () => Reward);
Navigation.registerComponent('com.splash', () => Splash);

Navigation.registerComponent('com.banner', () => BannerAd);
Navigation.registerComponent('com.intertitial', () => IntertitialAd);
Navigation.registerComponent('com.native', () => NativeAd);

Navigation.endRegisterComponent();

Navigation.setRoot({
  stack: {
    children: [
      {
        screen: {
          moduleName: 'com.home',
          options: {
            titleItem: {
              title: 'Home',
            },
          },
        },
      },
    ],
  },
});

// Navigation.setRoot({
//   tabs: {
//     children: [
//       {
//         stack: {
//           children: [
//             {
//               screen: {
//                 moduleName: 'com.home',
//                 options: {
//                   titleItem: {
//                     title: 'SDK',
//                   },
//                   tabItem: {
//                     title: 'afkari',
//                   },
//                 },
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
// });
