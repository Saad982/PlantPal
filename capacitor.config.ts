import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dbs.web.mobile.ionic',
  appName: 'PlantPal',
  webDir: 'www',
  plugins: {
    SplashScreen: {
    launchShowDuration: 3000,   
      backgroundColor: "#ffffffff",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: false,
      splashImmersive: false,   
    }
  }
};

export default config;
