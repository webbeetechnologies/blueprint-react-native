import { ProvideMolecules } from '@bambooapp/bamboo-molecules';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Example } from './Example';

export default function () {
    return (
        <SafeAreaProvider>
            <ProvideMolecules>
                <SafeAreaView>
                    <Example />
                </SafeAreaView>
            </ProvideMolecules>
        </SafeAreaProvider>
    );
}
