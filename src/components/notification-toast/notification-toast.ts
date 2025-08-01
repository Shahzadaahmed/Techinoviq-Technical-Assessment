// Note: Notification toast function...!

import { notifications } from '@mantine/notifications';

const showNotificationToast = (
    title: string,
    message: string,
    bgColor: string
) => {
    notifications.show({
        title: title,
        message: message,
        color: "white",
        autoClose: 3000,
        styles: (theme) => ({
            root: {
                backgroundColor: bgColor,
                border: "1px solid white",
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
            },

            indicator: {
                backgroundColor: "white",
            },

            title: {
                color: "white",
                fontWeight: 700,
            },

            description: {
                color: "white",
            },

            closeButton: {
                color: "white"
            },
        }),
    });
};

export default showNotificationToast;