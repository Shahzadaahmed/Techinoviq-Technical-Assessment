// Note: All pokemon list page...!

"use client";

import React, { useEffect, useState } from "react";
import { SimpleGrid, Container, Group, Box, Text } from '@mantine/core';
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchAllpokemons } from "@/redux/actions/app-actions/app-actions";
import PokemonCard from "@/components/pokemon-card/pokemon-card";
import SearchPokemon from "@/components/seach-pokemon/search-pokemon";

const AllPokemonList = () => {

    // Note: Handeling states here...!
    const [searchPokemon, setSearchPokemon] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    // Note: handeling redux here...!
    const dispatch = useAppDispatch();

    // Note: Getting all pokemons data from redux...!
    const allPokemonsList = useAppSelector(({ appStates }) => appStates?.allPokemonsList)
        ?.filter((eachPokemon) => {
            return eachPokemon?.name.toLowerCase().includes(searchPokemon.toLowerCase());
        });

    // Note: This hook  will run when the component mounts...!
    useEffect(() => {
        allPokemonsList.length < 1 && dispatch(fetchAllpokemons()).finally(() => setLoading(false));
    }, []);

    return (
        <Container size="lg" py="xl">
            <Group gap="xs" align="center" style={{ justifyContent: "center" }}>
                <Image
                    src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg"
                    alt="Pokemon Logo"
                    width={300}
                    height={200}
                />
                <Text
                    ta="center"
                    fw={800}
                    size="xl"
                    variant="gradient"
                    gradient={{ from: 'yellow', to: 'red', deg: 90 }}
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "5rem" }}
                >
                    Builder
                </Text>
            </Group>

            <Box mb="xl">
                <SearchPokemon
                    search={searchPokemon}
                    setSearch={setSearchPokemon}
                />
            </Box>

            <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing="lg"
                verticalSpacing="xl"
            >
                {
                    (allPokemonsList && allPokemonsList.length > 0) ?
                        (
                            allPokemonsList?.map((pokemonData: any) => {
                                return (
                                    <PokemonCard
                                        key={pokemonData?.name}
                                        screenName={'All Pokemon List Screen'}
                                        name={pokemonData?.name}
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

export default AllPokemonList;