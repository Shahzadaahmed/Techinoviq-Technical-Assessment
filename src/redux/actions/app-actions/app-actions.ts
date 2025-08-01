// Note: All authenticated action functions are defined here...!

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    FETCH_ALL_POKEMONS,
    MAKE_A_TEAM,
    SELECT_A_TEAM,
    ADD_POKEMON_TO_THE_TEAM,
    REMOVE_POKEMON_FROM_THE_TEAM
}
    from "@/redux/reducers/app-reducer/app-reducer";
import { MakeATeamProps, AddPokemonToTheTeam } from "@/types/global-types";

// Note: Action function to fetch all pokemons data...!
const fetchAllpokemons = createAsyncThunk(
    "app/fetchAllpokemons",
    async (_, { dispatch }) => {
        try {
            const response = await fetch("/api/pokemon-list");
            const pokemonData = await response.json();
            // // console.log("Pokemon Api Response: ", pokemonData);

            if (pokemonData && pokemonData.length > 0) {
                dispatch(FETCH_ALL_POKEMONS(pokemonData));
            };
        }

        catch (error: any) {
            // console.log('Something went wrong while fetching pokemons: ', error);
        };
    }
);

// Note: Action function to make a pokemon team...!
const makeAPokemonTeam = createAsyncThunk(
    "app/makeAPokemonTeam",
    async (pokemonTeamData: MakeATeamProps, { dispatch }) => {
        // // console.log("Pokemon team data: ", pokemonTeamData);
        dispatch(MAKE_A_TEAM(pokemonTeamData));
    }
);

// Note: Action function to select a pokemon team...!
const selectAPokemonTeam = createAsyncThunk(
    "app/selectAPokemonTeam",
    async (teamName: string, { dispatch }) => {
        // // console.log('Team name: ', teamName);
        dispatch(SELECT_A_TEAM(teamName));
    }
);

// Note: Action function to add pokemon to the team...!
const addPokemonToTheTeam = createAsyncThunk(
    "app/addPokemonToTheTeam",
    async (pokemonData: AddPokemonToTheTeam, { dispatch }) => {
        // // console.log('Pokemon data: ', pokemonData);
        dispatch(ADD_POKEMON_TO_THE_TEAM(pokemonData));
    }
);

// Note: Action function to remove pokemon from the team...!
const removePokemonFromTheTeam = createAsyncThunk(
    "app/removePokemonFromTheTeam",
    async ( pokemonName : string, { dispatch }) => {
        // // console.log('Pokemon name: ', pokemonName);
        dispatch(REMOVE_POKEMON_FROM_THE_TEAM(pokemonName));
    }
);

export {
    fetchAllpokemons,
    makeAPokemonTeam,
    selectAPokemonTeam,
    addPokemonToTheTeam,
    removePokemonFromTheTeam
};