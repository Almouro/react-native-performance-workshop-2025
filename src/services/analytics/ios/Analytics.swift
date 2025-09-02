func fibo(_ n: Int) -> Int {
  if n <= 1 {
    return n
  }
  return fibo(n - 1) + fibo(n - 2)
}

@objc(Analytics)
class Analytics: NSObject {
  @objc(initialize:withRejecter:)
  func initialize(resolve: RCTPromiseResolveBlock, reject _: RCTPromiseRejectBlock) {
    DispatchQueue.main.async {
      // Simulate a heavy initialization on UI thread
      print(fibo(42))
    }
    resolve(true)
  }
}
