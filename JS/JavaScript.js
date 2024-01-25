const listaPokemon = document.querySelector("#listapokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
     fetch(URL + i)
        .then((response)=> response.json())
        .then(data => mostrarPokemon(data))    
}                  

function mostrarPokemon(poke){
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <p class="pokemon-id-back">${poke.id}</p>
    <div class="pokemon-imagen"> <img src="${poke.sprites.other.dream_world.front_default}" alt="Foto Pokemon"></div>
    <div class="pokemon-info">
        <div class="nombre-contenedor">
            <p class="pokemon-id">#025</p>
            <h2 class="pokemon-nombre">${poke.name}</h2>
        </div>
        <div class="pokemon-tipos">
            <p class="tipo Electrico">Eléctrico</p>
            <p class="tipo Veneno">Algo</p>
        </div>                            
        <div class="pokemon-stats">
            <p class="stats">${poke.height}M</p>
            <p class="stats">${poke.weight} Kg</p>
        </div>
    </div>    
    `;
    listapokemon.append(div);
}