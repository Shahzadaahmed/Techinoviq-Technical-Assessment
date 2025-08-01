// Note: Search Pokemon component...!

import React, { memo } from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { SearchPokemonProps } from '@/types/global-types';

const SearchPokemon = (props: SearchPokemonProps) => {
    const { search, setSearch } = props;
    // console.log("Search Props: ", props);

    return (
        <TextInput
            placeholder="Search Pokémon by name..."
            leftSection={<IconSearch size={18} />}
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
        />
    );
};

export default memo(SearchPokemon);