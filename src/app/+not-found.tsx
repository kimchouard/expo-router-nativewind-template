import { Link, Stack } from 'expo-router';

import { Text, View } from '@/src/components/Themed';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex flex-1 items-center justify-center p-5">
        <Text className="text-xl font-bold">This screen doesn't exist.</Text>

        <Link href="/" className="mt-4 py-4">
          <Text className="text-base text-link">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
