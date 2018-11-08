import 'bootstrap';
import $ from 'jquery';
import './dropdown.scss';

const printHeads = (heads) => {
  let newString = '';
  heads.forEach((head) => {
    newString += `
      <a class="dropdown-item" type="${head.id}"><img src="${head.imageUrl}"></a>
    `;
  });
  $('#head-links').html(newString);
};

const printTorsos = (torsos) => {
  let newString = '';
  torsos.forEach((torso) => {
    newString += `
      <a class="dropdown-item" type="${torso.id}"><img src="${torso.imageUrl}"></a>
    `;
  });
  $('#torso-links').html(newString);
};

const printLegs = (legs) => {
  let newString = '';
  legs.forEach((leg) => {
    newString += `
      <a class="dropdown-item" type="${leg.id}"><img src="${leg.imageUrl}"></a>
    `;
  });
  $('#leg-links').html(newString);
};

export default { printHeads, printTorsos, printLegs };
