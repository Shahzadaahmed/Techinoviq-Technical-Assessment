'use client';

import React , { FC } from 'react';
import { Card, Text, Title, Group, Stack, Badge, Divider } from '@mantine/core';
import { IconFlame, IconStar } from '@tabler/icons-react';
import { StatsOverviewProps } from '@/types/global-types';

const TeamOverviewStats: FC<StatsOverviewProps> = ({ pokiStatsData }) => {
    console.log('Props: ', pokiStatsData);

    const experience = 50;
    const allTypes = pokiStatsData.flatMap((pokemon) => pokemon.types);
    const uniqueTypes = Array.from(new Set(allTypes));

    return (
        <Card
            shadow="md"
            radius="lg"
            padding="lg"
            withBorder
            style={{ width: '100%' }}
            mb={20}
        >
            <Stack gap="sm">
                <Title order={4}>Team Overview</Title>
                <Divider />

                <Group justify="space-between">
                    <Group>
                        <IconFlame size={22} />
                        <Text fw={500}>Types Covered</Text>
                    </Group>
                    <Group gap="xs">
                        {uniqueTypes.map((type) => (
                            <Badge
                                key={type}
                                color="grape"
                                variant="light"
                                size="sm"
                                radius="sm"
                                style={{ textTransform: 'capitalize' }}
                            >
                                {type}
                            </Badge>
                        ))}
                    </Group>
                </Group>

                <Group justify="space-between" mt="md">
                    <Group>
                        <IconStar size={22} />
                        <Text fw={500}>Avg. Base Experience</Text>
                    </Group>
                    <Text fw={600}>{experience}</Text>
                </Group>
            </Stack>
        </Card>
    );
};

export default TeamOverviewStats;