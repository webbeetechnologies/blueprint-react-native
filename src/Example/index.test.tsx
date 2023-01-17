import 'react-native';

import { cleanup, render, screen } from '@testing-library/react-native';

import { Example } from './';

afterEach(cleanup);

it('renders correctly', async () => {
    render(<Example />);
    expect(screen.getByText('Hello, we made it!')).toBeTruthy();
});
