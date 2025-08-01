// Note: All global types are defined here...!

import { ReactNode } from "react";

// Note: Main layout file types...!
export interface LayoutProps {
    children: ReactNode;
};

// Note: Redux types...!
export interface ReduxStateType {
    allPokemonsList: {
        name: string;
        image: string;
        types: string[];
    }[];
    usersTeam: {
        isTeamSelected: boolean;
        teamName: string;
        teamDescription: string;
    }[];
    userPokemonsList: {
        teamName: string;
        pokemonName: string;
        image: string;
        types: string[];
    }[];
};

// Note: Component types...!

// Note: PokemonCard component types...!
export interface PokemonCardProps {
    screenName: string;
    name: string;
    image: string;
    types: string[];
};

// Note: SearchPokemon component types...!
export interface SearchPokemonProps {
    search: string;
    setSearch: (value: string) => void;
};

// Make a team form types...!
export interface MakeATeamProps {
    isTeamSelected: boolean;
    teamName: string;
    teamDescription: string;
};

// Add pokemon to the team props...!

export interface AddPokemonToTheTeam {
    teamName: string;
    pokemonName: string;
    image: string;
    types: string[];
}

// Statts overview types...!
export interface StatsOverviewProps {
    pokiStatsData: {
        teamName: string;
        pokemonName: string;
        image: string;
        types: string[];
    }[];
}