import 'bootstrap';
import $ from 'jquery';

const dropLinkEvents = () => {
  $('#dropdown-div').on(('click'), (e) => {
    const selectedPart = $(e.target)
      .closest('a')
      .attr('id');
    console.log(selectedPart);
  });
};

export default { dropLinkEvents };
