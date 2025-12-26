import { Stack } from "expo-router";
import './global.css';
import { Poppins_700Bold} from '@expo-google-fonts/poppins';

export default function RootLayout() {
  return <Stack >
    <Stack.Screen 
      name="(Logins)"
      options={{headerShown:false}}
    />
    <Stack.Screen 
      name="Login"
      options={{headerShown:false}}
    />
  </Stack>;
}
