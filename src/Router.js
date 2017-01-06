import { createRouter } from '@exponent/ex-navigation';

import Timer from './components/Timer';
import RingToneList from './components/RingToneList';

export const Router = createRouter(() => ({
    home: () => Timer,
    chooseRingTone: () => RingToneList,
}));
