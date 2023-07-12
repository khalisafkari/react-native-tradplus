
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNTradplusSpec.h"

@interface Tradplus : NSObject <NativeTradplusSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Tradplus : NSObject <RCTBridgeModule>
#endif

@end
