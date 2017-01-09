import { createRouter } from '@exponent/ex-navigation';

import WorldClock from './components/WorldClock';
import Alarm from './components/Alarm';
import Stopwatch from './components/Stopwatch';
import BedTime from './components/BedTime';
import Timer from './components/Timer';
import RingToneList from './components/RingToneList';
import RootNavigation from './RootNavigation';

const Router = createRouter(() => ({
    rootNavigation: () => RootNavigation,
    worldClock: () => WorldClock,
    alarm: () => Alarm,
    bedTime: () => BedTime,
    stopwatch: () => Stopwatch,
    timer: () => Timer,
    ringToneList: () => RingToneList,
}));

export default Router;
