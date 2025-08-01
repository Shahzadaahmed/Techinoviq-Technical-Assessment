// Note: This is a SSR file for fetching the Pokemon list...! (fetch pokemon list from PokeAPI).

// Note: All GET Api's request are handled here...!

import { NextRequest, NextResponse } from "next/server";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=15"; // 15 pokemons only

const GET = async () => {

    // Note: Fetching the Pokemon list from PokeAPI...!
    const pokemonList = await fetch(apiUrl);
    const listData = await pokemonList.json();
    // console.log("Fetched Pokemon List:", listData);

    const fullData = await Promise.all(
        listData.results.map(async (pokemon: any) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();

            return {
                name: data.name,
                image: data.sprites.other['official-artwork'].front_default,
                types: data.types.map((t: any) => t.type.name)
            };
        })
    );

    return Response.json(fullData);
};

export { GET };