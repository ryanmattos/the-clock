import Title from '@/components/Title';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PunchScreen from '@/screens/PunchScreen';

import '@/common/date'

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  let colorScheme = useColorScheme();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (colorScheme === 'dark') {
    // render some dark thing
  } else {
    // render some light thing
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: 'red' }}>
      <View style={styles.container}>
        <Title />
        <PunchScreen />
        <StatusBar style="auto" />
      </View>
      <Toast topOffset={50} visibilityTime={2000}/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingTop: 50
  },
});
