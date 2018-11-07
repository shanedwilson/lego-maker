# Lego Builder

This assignment is inspired in part by [this pretty nifty book](https://www.youtube.com/watch?v=tDnDrO7neUE) 📖

## Setup

You will have at least this many files with your setup:
```
|- db
    |- parts.json
|- src
    |- components
        |- LegoCharacter
            |- legoCharacter.js
            |- legoCharacter.scss
        |- SavedCharacters
            |- savedCharacters.js
            |- savedCharacters.scss
    |- data
        |- partsData.js
    |- index.js
    |- index.scss
    |- index.html
|- .eslintignore
|- .eslintrc
|- .gitignore
|- package.json
|- README.md
|- webpack.config.js
```

## Requirements

- Use [SASS](https://sass-lang.com/guide) for styling your page and components.
- When the user loads the page, they should see a head, a torso, and legs printed together on the page. This is your lego character.
