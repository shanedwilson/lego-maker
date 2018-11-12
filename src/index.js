import 'bootstrap';
import $ from 'jquery';
import './index.scss';
import legoCharacter from './components/legoCharacter/legoCharacter';
import events from './components/helpers/events';

const initApp = () => {
  $('#back-btn').hide();
  legoCharacter.getHeads();
  legoCharacter.getTorsos();
  legoCharacter.getLegs();
  events.dropHeadEvent();
  events.dropTorsoEvent();
  events.dropLegEvent();
  events.randomBtnEvent();
  events.saveBtnEvent();
  events.backBtnEvent();
  $('#saved-image-container').hide();
};

initApp();
