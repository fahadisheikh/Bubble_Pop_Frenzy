import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bubblepopfrenzy.app',
  appName: 'Bubble Pop Frenzy',
  webDir: 'dist',
  backgroundColor: '#FDEB71',
  android: {
    allowMixedContent: false,
    captureInput: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#FDEB71',
      showSpinner: false,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#FDEB71',
    },
  },
};

export default config;
