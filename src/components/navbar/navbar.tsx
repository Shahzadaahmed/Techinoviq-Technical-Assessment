// Note: Navbar component...!

'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Flex, Text, Anchor } from '@mantine/core';
import { IconPokeball } from '@tabler/icons-react';

const links = [
  { label: 'All Pokémon', href: '/all-pokemon' },
  { label: 'My Pokémon', href: '/my-pokemon' },
  { label: 'Make a Team', href: '/make-team' },
  { label: 'Select Team', href: '/select-team' },
];

const AppNavbar = () => {
  const pathname = usePathname();

  return (
    <Box
      px="lg"
      py="sm"
      style={{
        background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
        color: 'white',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Flex justify="space-between" align="center">
        <Flex align="center" gap="sm">
          <IconPokeball size={26} color="white" />

          <Text fw={700} size="lg" style={{ color: "white" }}>
            Pokémon Builder
          </Text>
        </Flex>

        <Flex align="center" gap="xl">
          {
            links.map((link) => (
              <Anchor
                key={link.href}
                component={Link}
                href={link.href}
                c={pathname === link.href ? 'yellow.3' : 'white'}
                fw={pathname === link.href ? 700 : 400}
                underline="never"
                size="sm"
                style={{
                  transition: 'all 0.2s',
                  transform: pathname === link.href ? 'scale(1.1)' : 'none',
                }}
              >
                {link.label}
              </Anchor>
            ))
          }
        </Flex>
      </Flex>
    </Box>
  );
};

export default memo(AppNavbar);