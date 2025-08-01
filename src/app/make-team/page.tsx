// Note: MakeATeam page...!

'use client';

import { useState } from 'react';
import {
    Box,
    Button,
    Paper,
    Stack,
    TextInput,
    Textarea,
    Title,
} from '@mantine/core';
import { useAppDispatch } from '@/redux/store';
import { makeAPokemonTeam } from '@/redux/actions/app-actions/app-actions';
import showNotificationToast from "@/components/notification-toast/notification-toast";
import { MakeATeamProps } from '@/types/global-types';

const MakeATeam = () => {

    // Note: handeling states here...!
    const [teamName, setTeamName] = useState<string>('');
    const [teamDescription, setTeamDescription] = useState<string>('');

    // Note: handeling redux here...!
    const dispatch = useAppDispatch();

    // Submit handler
    const handleSaveTeam = () => {
        const teamData: MakeATeamProps = {
            isTeamSelected: false,
            teamName: teamName,
            teamDescription: teamDescription
        };

        // // console.log('Saving Team:', teamData);
        teamData && dispatch(makeAPokemonTeam(teamData)).finally(() => {
            setTeamName("");
            setTeamDescription("");
            showNotificationToast("Team Created", "Team created successfully, Now you can add pokemon in a team", "#1e3c72");
        });
    };

    return (
        <Box
            style={{
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
            }}
        >
            <Paper
                shadow="xl"
                radius="lg"
                p="xl"
                withBorder
                style={{
                    width: '100%',
                    maxWidth: 500,
                    backgroundColor: '#ffffffcc',
                }}
            >
                <Stack gap="md">
                    <Title order={2} ta="center" mb="sm" c="indigo.8" fw={700}>
                        Create Your Pokémon Team
                    </Title>

                    <TextInput
                        label="Team Name"
                        placeholder="Enter team name"
                        required
                        size="md"
                        value={teamName}
                        onChange={(e) => setTeamName(e.currentTarget.value)}
                    />

                    <Textarea
                        label="Team Description"
                        placeholder="Optional description..."
                        autosize
                        minRows={3}
                        size="md"
                        value={teamDescription}
                        onChange={(e) => setTeamDescription(e.currentTarget.value)}
                    />

                    <Button
                        fullWidth
                        size="md"
                        radius="md"
                        color="indigo"
                        mt="md"
                        onClick={handleSaveTeam}
                        disabled={!teamName.trim() && !teamDescription.trim()}
                    >
                        Save Team
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
};

export default MakeATeam;