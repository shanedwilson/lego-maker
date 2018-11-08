import 'bootstrap';
import $ from 'jquery';
import legoCharacter from '../legoCharacter/legoCharacter';

const dropLinkEvents = () => {
  $('#dropdown-div').on(('click'), (e) => {
    const selectedPart = $(e.target)
      .closest('a')
      .attr('id');
    console.log(selectedPart);
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

export default { dropLinkEvents, randomBtnEvent };
