document.getElementById('searchbtn').addEventListener('click', find_pokemon);

document.getElementById('clearbtn').addEventListener('click', clearList);

function find_pokemon() {

    const xhr = new XMLHttpRequest(),
          pokemonName = document.getElementById('nameinput').value.toLowerCase(),
          endPoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

          if (pokemonName == '') {
              document.getElementById('nameinput').placeholder = 'Please Enter Something';
          } else {

            xhr.open('GET', endPoint, true);

            xhr.onload = () => {

                if (xhr.responseText == 'Not Found') {
                    document.getElementById('nameinput').value = '';
                    document.getElementById('nameinput').placeholder = 'Pokemon Not Found';


                } else {

                   let pokemonInfo = JSON.parse(xhr.responseText);

                   console.log(endPoint);

                   document.getElementById('name').innerHTML += `<hr><h1>${pokemonInfo.name.substring(0,1).toUpperCase() + pokemonInfo.name.substring(1,pokemonInfo.name.length)}</h1><br>`;
                   document.getElementById('idNum').innerHTML += `<hr><h1>${pokemonInfo.id}</h1><br>`;
                   document.getElementById('height').innerHTML += `<hr><h1>${pokemonInfo.height}</h1><br>`;
                   document.getElementById('weight').innerHTML += `<hr><h1>${pokemonInfo.weight}</h1><br>`;
                   let typesString = '';
                   for (let i = 0; i < pokemonInfo.types.length; i++) {

                       typesString += `${pokemonInfo.types[i].type.name.substring(0,1).toUpperCase() + pokemonInfo.types[i].type.name.substring(1,pokemonInfo.types[i].type.name.length)} `;
                       
                   }
                   document.getElementById('types').innerHTML += '<hr>' + `<h1>${typesString}</h1>` +  '<br>';
                   document.getElementById('image').innerHTML += '<hr><img src = ' + pokemonInfo.sprites.front_default + '><br>';
                
                        console.log(pokemonInfo.sprites.front_default);

                   
                   

                }

            }
            xhr.send();

          }

    

    
    

    // document.getElementById('img1').src = "";
    // document.getElementById('img2').src = "";
    
}

function clearList() {

    document.getElementById('name').innerHTML = 'Name: ';
    document.getElementById('idNum').innerHTML = 'Id #: ';
    document.getElementById('height').innerHTML = 'Height: ';
    document.getElementById('weight').innerHTML = 'Weight: ';
    document.getElementById('types').innerHTML = 'Types: ';
    document.getElementById('image').innerHTML = 'Image: ';    
    
}

