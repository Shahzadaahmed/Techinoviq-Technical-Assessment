/***** Note: AppReducer *****/

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxStateType } from "@/types/global-types";

// Note: Reducer states...!
const initialState: ReduxStateType = {
    allPokemonsList: [],
    usersTeam: [],
    userPokemonsList: []
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        FETCH_ALL_POKEMONS: (state, action: PayloadAction<any>) => {
            // // console.log("All pokemon list in app reducer: ", action.payload);
            state.allPokemonsList = action.payload;
        },

        MAKE_A_TEAM: (state, action: PayloadAction<any>) => {
            // // console.log("User pokemon team: ", action.payload);

            const fetchAllUserPokemonsTeam = [...state.usersTeam];
            fetchAllUserPokemonsTeam.push(action.payload);
            state.usersTeam = fetchAllUserPokemonsTeam;
        },

        SELECT_A_TEAM: (state, action: PayloadAction<any>) => {
            // // console.log("Target team: ", action.payload);

            const fetchAllUserPokemonsTeam = [...state.usersTeam];
            const findIndex = fetchAllUserPokemonsTeam.findIndex((item) => { return item.teamName == action.payload });
            // // console.log('Target index: ', findIndex);

            for (let i = 0; i < fetchAllUserPokemonsTeam.length; i++) {
                fetchAllUserPokemonsTeam[i].isTeamSelected = false;
            };
            fetchAllUserPokemonsTeam[findIndex].isTeamSelected = true;
            state.usersTeam = fetchAllUserPokemonsTeam;
        },

        ADD_POKEMON_TO_THE_TEAM: (state, action: PayloadAction<any>) => {
            // // console.log('Pokemon data: ', action.payload);

            const fetchUserPokemonsList = [...state.userPokemonsList];
            fetchUserPokemonsList.push(action.payload);
            state.userPokemonsList = fetchUserPokemonsList;
        },

        REMOVE_POKEMON_FROM_THE_TEAM: (state, action: PayloadAction<any>) => {
            // console.log('Pokemon name: ', action.payload);

            const fetchUserPokemonsList = [...state.userPokemonsList];
            const findIndex = [...state.userPokemonsList].findIndex((item) => { return item.pokemonName == action.payload });
            fetchUserPokemonsList.splice(findIndex, 1);
            state.userPokemonsList = fetchUserPokemonsList;
        }
    }
});

export const
    {
        FETCH_ALL_POKEMONS,
        MAKE_A_TEAM,
        SELECT_A_TEAM,
        ADD_POKEMON_TO_THE_TEAM,
        REMOVE_POKEMON_FROM_THE_TEAM
    } = appSlice.actions;
export default appSlice.reducer;