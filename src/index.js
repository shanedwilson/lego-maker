import 'bootstrap';
import './index.scss';
import legoCharacter from './components/legoCharacter/legoCharacter';
import events from './components/helpers/events';

const initApp = () => {
  legoCharacter.getHeads();
  legoCharacter.getTorsos();
  legoCharacter.getLegs();
  events.dropHeadEvent();
  events.dropTorsoEvent();
  events.dropLegEvent();
  events.randomBtnEvent();
  events.saveBtnEvent();
};

initApp();
