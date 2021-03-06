

/*
Description
We're going to create a Pokemon Trading Cards show page. To achieve this, you'll use JS to dynamically create all the elements on the page!

Instructions
- Use this template as the starting point => https://codesandbox.io/s/pokemon-trading-cards-template-rd5vq?file=/index.js
- Download the folder, don't use CodeSandbox, it will not work properly.
- Make sure you check and understand the data that is given to you! 
- Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
- Use the exact CSS classes you see in the example HTML to obtain the same style for each card
- The cards should be nested inside <section class="cards"></section>
- Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
- Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

Tips
- Use functions to your advantage. Break each card into smaller parts, and think how you can turn them into functions.
- Once you've got a card, think of a way to programmatically create all the others
- Make sure you understand well the data structure before starting to create the cards

Challenge
Add an extra section to each card that contains information about which games each pokemon appeared in.

Challenge 2
See if you can find a way to toggle between the different images of each card! (this is a hard one! You might want to use google...)
*/
// write your code here!
// This variable has the data you're working with

console.log(data);


for (const pokemon of data){
 console.log(pokemon.stats)
 pokemonCard(pokemon)
}
function pokemonCard (pokemon) {
let pokemonImg = pokemon.sprites.other['official-artwork'].front_default
// article
const article = document.createElement('article');
article.className = 'card'

// Section
const section = document.querySelector('section')
section.append(article)
// test.

// title
const title = document.createElement("h2");
title.className = 'card--title';
title.innerText = pokemon.name

// img

const img = document.createElement('img')
img.className = 'card--img'
img.src = pokemonImg
// article.append(img)

// card--text div
const div = document.createElement('div')
div.className = 'card--text'

// div p tag

for (const statObject of pokemon.stats) {
   console.log(statObject)
   let pokemonP = pokemonParagraph(statObject.stat.name, statObject.base_stat)
   div.append(pokemonP)
}



article.append(title, img, div)


}

function pokemonParagraph(text, stat) {
 const pEl1 = document.createElement('p')
 // pEl1.className = ''
 pEl1.innerText = `${text}: ${stat}`
 return pEl1
 }

// console.log(section, article)

pokemonCards()