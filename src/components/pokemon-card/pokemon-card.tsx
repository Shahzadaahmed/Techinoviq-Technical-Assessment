// Note: PokemonCard component...!

'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import { Card, Text, Badge, Group, Box, Button } from '@mantine/core';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import { addPokemonToTheTeam , removePokemonFromTheTeam } from '@/redux/actions/app-actions/app-actions';
import showNotificationToast from "@/components/notification-toast/notification-toast";
import { PokemonCardProps } from '@/types/global-types';

const PokemonCard = (props: PokemonCardProps) => {
    const { screenName, name, image, types } = props;
    // console.log("Props: ", props);

    // Note: handeling redux here...!
    const dispatch = useAppDispatch();
    const { usersTeam, allPokemonsList, userPokemonsList } = useAppSelector(({ appStates }) => appStates);

    // Note: Function to adding a Pokémon to the team (if needed)
    const handleAddPokemon = (pokemonName: string) => {
        // console.log("Seleced pokemon: ", pokemonName);

        const isTeamSelected = usersTeam.find((item) => { return item.isTeamSelected });
        const getPokemonDetails = allPokemonsList.find((item) => { return item.name == pokemonName });
        const isAlreadyAdded = userPokemonsList.find((item) => { return item.pokemonName == pokemonName });
        const fetchAllUsersPokemon = userPokemonsList.filter((item) => { return item.teamName == isTeamSelected?.teamName });

        try {
            if (usersTeam.length == 0) throw "No Team Available, Please make a team first";
            else if (!isTeamSelected) throw "Team Not Selected, Please select team first";
            else if (isAlreadyAdded) throw `${pokemonName} already in your team`;
            else if (fetchAllUsersPokemon.length == 6) throw "Can't add more than 6 pokemons in a team";

            else {
                if (getPokemonDetails) {
                    dispatch(addPokemonToTheTeam({
                        teamName: isTeamSelected.teamName,
                        pokemonName: getPokemonDetails?.name,
                        image: getPokemonDetails?.image,
                        types: getPokemonDetails?.types
                    })).finally(() => showNotificationToast("Pokemon added", `You added ${pokemonName} to your team`, "#1e3c72"))
                };
            };
        }

        catch (error) {
            if (error) {
                const errMessage = error as string
                console.log("Error: ", errMessage);
                showNotificationToast("Error", errMessage, "red");
            };
        };
    };

    return (
        <Card
            padding="lg"
            radius="md"
            withBorder
            style={{
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12)';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
            }}
        >
            <Box mb="md" style={{ display : "flex" , justifyContent : "center" }}>
                <Image
                    src={image}
                    alt={name}
                    height={140}
                    width={140}
                    style={{ objectFit: "contain" }}
                    loading='lazy'
                />
            </Box>

            <Text fw={700} mt="md" ta="center" fz="lg" tt="capitalize">
                {name}
            </Text>

            <Group justify="center" mt="sm">
                {
                    types.map((type: string) => (
                        <Badge key={type} variant="light" color="teal" tt="capitalize">
                            {type}
                        </Badge>
                    ))
                }
            </Group>

            {
                screenName == "All Pokemon List Screen" &&
                <Button
                    fullWidth
                    mt="md"
                    variant="gradient"
                    gradient={{ from: '#1e3c72', to: '#2a5298' }}
                    onClick={() => handleAddPokemon(name)}
                >
                    Add Pokémon
                </Button>
            }

            {
                screenName == "My Pokemon List Screen" &&
                <Button
                    fullWidth
                    mt="md"
                    variant="gradient"
                    gradient={{ from: '#1e3c72', to: '#2a5298' }}
                    onClick={() => dispatch(removePokemonFromTheTeam(name)).finally( () => showNotificationToast("Pokemon remove", `You removed ${name} from your team`, "#1e3c72") )}
                >
                    Remove Pokémon
                </Button>
            }
        </Card>
    );
};

export default memo(PokemonCard);