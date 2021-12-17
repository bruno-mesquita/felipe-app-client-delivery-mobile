export default {
  expo: {
    name: "Flipp",
    slug: "flipp",
    version: "1.1.1",
    orientation: "portrait",
    icon: "./src/assets/images/icons/logo_app.png",
    splash: {
      image: "./src/assets/images/splash.png",
      resizeMode: "cover"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "flipp.com"
    },
    android: {
      userInterfaceStyle: "light",
      versionCode: 4,
      googleServicesFile: "./google-services.json",
      adaptiveIcon: {
        backgroundColor: "#9E0404",
        foregroundImage: "./src/assets/images/icons/logo_app.png"
      },
      package: "flipp.com"
    },
    platforms: [
      "android"
    ],
    notification: {
      icon: "./src/assets/images/icons/logo_app.png"
    },
    extra: {
      apiUrl: process.env.API_URL ?? 'http://192.168.15.24:3030/api/app'
    }
  }
}
