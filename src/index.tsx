import { View, Text,  } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function () {
    // eslint-disable-next-line no-console
    console.log(`
        Start writing your business logic and export files here.
    `);

    return <SafeAreaProvider>
        <SafeAreaView>
        <View><Text>Hello</Text></View>
        </SafeAreaView>
    </SafeAreaProvider>
}
