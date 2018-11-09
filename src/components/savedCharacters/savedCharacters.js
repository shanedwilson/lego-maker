import 'bootstrap';
import $ from 'jquery';
import './savedCharacters.scss';

const printSavedCharacter = (savedCharacters) => {
  let newString = '';
  savedCharacters.forEach((savedCharacter) => {
    console.log(savedCharacter.name);
    newString += `
      <div class="saved-character col" >
      <p>${savedCharacter.name}</p>
      <img src="${savedCharacter.head}">
      <img src="${savedCharacter.torso}">
      <img src="${savedCharacter.leg}">
      </div>
  `;
    $('.saved-image-div').append(newString);
  });
};

export default {
  printSavedCharacter,
};
