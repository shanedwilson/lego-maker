// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import legoCharacter from './components/legoCharacter/legoCharacter';
import savedCharacters from './components/savedCharacters/savedCharacters';
import events from './components/helpers/events';

const initApp = () => {
  legoCharacter.getHeads();
  legoCharacter.getTorsos();
  legoCharacter.getLegs();
  savedCharacters.saved();
  events.dropLinkEvents();
  events.randomBtnEvent();
};

initApp();
