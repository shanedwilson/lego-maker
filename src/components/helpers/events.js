import 'bootstrap';
import $ from 'jquery';
import legoCharacter from '../legoCharacter/legoCharacter';

const dropHeadEvent = () => {
  $('#dropdown-div').on(('click'), (e) => {
    const selectedHead = $(e.target)
      .closest('a')
      .attr('id');
    legoCharacter.selectedHead(selectedHead);
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

export default { dropHeadEvent, randomBtnEvent };
