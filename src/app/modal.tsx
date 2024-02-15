import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { View, Text  } from '@/src/components/Themed';

import EditScreenInfo from '@/src/components/EditScreenInfo';

export default function ModalScreen() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Modal</Text>
      <View className="my-7 h-[1px] w-[80%] bg-black/10"/>
      <EditScreenInfo path="src/app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
