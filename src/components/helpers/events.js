import 'bootstrap';
import $ from 'jquery';
import legoCharacter from '../legoCharacter/legoCharacter';
import savedCharacters from '../savedCharacters/savedCharacters';

const savedArray = [];

const dropHeadEvent = () => {
  $('#head-links').on(('click'), (e) => {
    const selectedHead = $(e.target)
      .closest('.dropdown-item')
      .attr('type');
    legoCharacter.selectedHead(selectedHead);
  });
};

const dropTorsoEvent = () => {
  $('#torso-links').on(('click'), (e) => {
    const selectedTorso = $(e.target)
      .closest('.dropdown-item')
      .attr('type');
    legoCharacter.selectedTorso(selectedTorso);
  });
};

const dropLegEvent = () => {
  $('#leg-links').on(('click'), (e) => {
    const selectedLeg = $(e.target)
      .closest('.dropdown-item')
      .attr('type');
    legoCharacter.selectedLeg(selectedLeg);
  });
};

const randomBtnEvent = () => {
  $('#random-button').on(('click'), () => {
    legoCharacter.getHeads();
    legoCharacter.getTorsos();
    legoCharacter.getLegs();
  });
};

const saveBtnEvent = () => {
  $('#save-button').on(('click'), () => {
    const name = $('#name-div').text();
    const head = $('#heads-div').find('img').attr('src');
    const torso = $('#torsos-div').find('img').attr('src');
    const leg = $('#legs-div').find('img').attr('src');
    savedArray.push({
      name, head, torso, leg,
    });
    savedCharacters.printSavedCharacter(savedArray);
  });
};

export default {
  dropHeadEvent, randomBtnEvent, dropTorsoEvent, dropLegEvent, saveBtnEvent,
};
