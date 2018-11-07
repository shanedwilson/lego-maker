// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import legoCharacter from './components/legoCharacter/legoCharacter';
import savedCharacters from './components/savedCharacters/savedCharacters';

const initApp = () => {
  legoCharacter.getHeads();
  legoCharacter.getTorsos();
  legoCharacter.getLegs();
  savedCharacters.saved();
};

initApp();
