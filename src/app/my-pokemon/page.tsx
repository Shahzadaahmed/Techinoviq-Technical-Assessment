// Note: My pokemon list page...!

"use client";

import React, { useState } from "react";
import { SimpleGrid, Container } from '@mantine/core';
import { useAppSelector } from "@/redux/store";
import PokemonCard from "@/components/pokemon-card/pokemon-card";
import TeamOverviewStats from "@/components/team-stats/teams-stats";

const MyPokemonList = () => {

    // Note: Handeling states here...!
    const [loading, setLoading] = useState<boolean>(false);

    // Note: Getting all pokemons data from redux...!
    const { userPokemonsList, usersTeam } = useAppSelector(({ appStates }) => appStates);
    const activeUser = usersTeam.find((userItem) => { return userItem.isTeamSelected })?.teamName;
    // console.log("Active user: ", activeUser);
    // console.log("My pokemons list: ", userPokemonsList);

    return (
        <Container size="lg" py="xl">

            {
                userPokemonsList?.filter((user) => { return user.teamName == activeUser }).length > 0 &&
                <TeamOverviewStats pokiStatsData={userPokemonsList?.filter((user) => { return user.teamName == activeUser })} />
            }


            <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing="lg"
                verticalSpacing="xl"
            >
                {
                    (userPokemonsList && userPokemonsList.length > 0) ?
                        (
                            userPokemonsList
                                ?.filter((user) => { return user.teamName == activeUser })
                                ?.map((pokemonData: any) => {
                                    return (
                                        <PokemonCard
                                            key={pokemonData?.image}
                                            screenName={'My Pokemon List Screen'}
                                            name={pokemonData?.pokemonName}
                                            image={pokemonData?.image}
                                            types={pokemonData?.types}
                                        />
                                    );
                                })
                        )
                        : (null)
                }
            </SimpleGrid>
        </Container>
    );
};

export default MyPokemonList;