// Note: Redux Provider component (Client compoent)...!

"use client";

import React, { memo } from 'react';

// Note: Redux Integration...!
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "@/redux/store";
import { MantineProvider } from '@mantine/core';
import { LayoutProps } from "@/types/global-types";
import { Notifications } from '@mantine/notifications';

const ReduxProvider = ({ children }: LayoutProps) => {
    return (
        <Provider store={store}>
            <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                <MantineProvider>
                    <Notifications position="top-right" zIndex={5000} />
                    {children}
                </MantineProvider>
            </PersistGate>
        </Provider>
    );
};

export default memo(ReduxProvider);