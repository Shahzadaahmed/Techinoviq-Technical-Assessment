// Note: Select Pokemon Team Screen...!

"use client";

import React from "react";
import {
    Card,
    Text,
    Image,
    Badge,
    Stack,
    Group,
    Paper,
    rem,
} from "@mantine/core";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { selectAPokemonTeam } from "@/redux/actions/app-actions/app-actions";

const SelectTeamList = () => {

    // Note: Handeling redux here...!
    const dispatch = useAppDispatch();

    // Note: Getting all pokemons data from redux...!
    const { usersTeam, userPokemonsList } = useAppSelector(({ appStates }) => appStates);

    const handleSelect = (teamName: string) => {
        // // console.log('Team name: ', teamName);
        teamName && dispatch(selectAPokemonTeam(teamName));
    };

    return (
        <Stack gap="lg" mt="md" px="md">
            {
                usersTeam.map((team, index) => (
                    <Card
                        key={index}
                        radius="lg"
                        withBorder
                        shadow={team.isTeamSelected ? "xl" : "sm"}
                        padding="lg"
                        style={{
                            borderColor: team.isTeamSelected ? "#228be6" : "#dee2e6",
                            borderWidth: 2,
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                        }}
                        onClick={() => handleSelect(team?.teamName)}
                    >
                        <Group justify="space-between" mb="md">
                            <Text fw={700} size="lg">
                                {team?.teamName}
                            </Text>

                            {team?.isTeamSelected && <Badge color="blue">Selected</Badge>}
                        </Group>

                        <Text size="sm" c="dimmed" mb="md">
                            {team?.teamDescription}
                        </Text>

                        <Group gap="md" wrap="wrap">
                            {
                                userPokemonsList
                                    ?.filter((item) => { return item.teamName == team.teamName })
                                    ?.map((poke, idx) => (
                                        <Paper
                                            key={idx}
                                            p="sm"
                                            shadow="xs"
                                            withBorder
                                            radius="md"
                                            style={{ minWidth: rem(100), textAlign: "center" }}
                                        >
                                            <Image
                                                src={poke.image}
                                                alt={poke.pokemonName}
                                                height={80}
                                                fit="contain"
                                                mx="auto"
                                            />
                                            <Text size="sm" fw={600} mt="xs">
                                                {poke.pokemonName}
                                            </Text>
                                            <Group gap={4} justify="center" mt="xs">
                                                {poke.types.map((type, i) => (
                                                    <Badge key={i} size="xs" color="gray">
                                                        {type}
                                                    </Badge>
                                                ))}
                                            </Group>
                                        </Paper>
                                    ))
                            }
                        </Group>
                    </Card>
                ))
            }
        </Stack>
    );
};

export default SelectTeamList;