import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Example } from './Example';

export default function () {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Example />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
