import 'bootstrap';
import $ from 'jquery';
import legoCharacter from '../legoCharacter/legoCharacter';
import savedCharacters from '../savedCharacters/savedCharacters';

const savedArray = [];

const dropHeadEvent = () => {
  $('#head-links').on(('click'), (e) => {
    $('#heads-div').fadeOut(500);
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
    $('#back-btn').text('Back To Builder');
    $('#back-btn').show();
    $('#saved-image-container').show();
    $('#built-character').hide();
    $('.navbar-nav').hide();
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

const backBtnEvent = () => {
  $('#back-btn').on(('click'), () => {
    const btnText = $('#back-btn').text() === 'Show Saved Characters' ? 'Back To Builder' : 'Show Saved Characters';
    $('#back-btn').text(btnText);
    $('#saved-image-container').toggle();
    $('#built-character').toggle();
    $('.navbar-nav').toggle();
  });
};

export default {
  dropHeadEvent, randomBtnEvent, dropTorsoEvent, dropLegEvent, saveBtnEvent, backBtnEvent,
};
