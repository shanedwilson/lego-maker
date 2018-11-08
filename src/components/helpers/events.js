import 'bootstrap';
import $ from 'jquery';
import legoCharacter from '../legoCharacter/legoCharacter';
import savedCharacters from '../savedCharacters/savedCharacters';

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
    const savedHeadId = $('.head').attr('id');
    const savedTorsoId = $('.torso').attr('id');
    const savedLegId = $('.leg').attr('id');
    savedCharacters.savedHeadData(savedHeadId);
    savedCharacters.savedTorsoData(savedTorsoId);
    savedCharacters.savededLegData(savedLegId);
  });
};

export default {
  dropHeadEvent, randomBtnEvent, dropTorsoEvent, dropLegEvent, saveBtnEvent,
};
