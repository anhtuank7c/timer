import { createRouter } from '@exponent/ex-navigation';

import Timer from './components/Timer';
import RingToneList from './components/RingToneList';

const Router = createRouter(() => ({
    home: () => Timer,
    ringToneList: () => RingToneList,
}));

export default Router;
