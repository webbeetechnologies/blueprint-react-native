import { memo } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    example: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const Example = memo(() => {
    return (
        <View style={styles.example}>
            <Text>Hello, we made it!</Text>
        </View>
    );
});

export default function () {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Example />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
