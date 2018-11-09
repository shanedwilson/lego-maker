import 'bootstrap';
import $ from 'jquery';
import './savedCharacters.scss';

const printSavedCharacter = (savedCharacters) => {
  let newString = '';
  savedCharacters.forEach((savedCharacter) => {
    newString += `
      <div class="saved-character col" >
      <p>${savedCharacter.name}</p>
      <img src="${savedCharacter.head}">
      <img src="${savedCharacter.torso}">
      <img src="${savedCharacter.leg}">
      </div>
  `;
  });
  $('.saved-image-div').html(newString);
};

export default {
  printSavedCharacter,
};
