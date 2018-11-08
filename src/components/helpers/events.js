import 'bootstrap';
import $ from 'jquery';
import legoCharacter from '../legoCharacter/legoCharacter';

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
    console.log(selectedLeg);
  });
};

const randomBtnEvent = () => {
  $('#random-button').on(('click'), () => {
    $('#name-div').empty();
    legoCharacter.getHeads();
    legoCharacter.getTorsos();
    legoCharacter.getLegs();
  });
};

export default {
  dropHeadEvent, randomBtnEvent, dropTorsoEvent, dropLegEvent,
};
