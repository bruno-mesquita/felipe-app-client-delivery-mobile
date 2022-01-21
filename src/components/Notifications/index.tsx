import { useEffect, useRef } from 'react';
import * as Device from 'expo-device';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import api from '@services/api';
import { useAppSelector } from '@store/hooks';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const RegisterNotifications = () => {
  const { signed } = useAppSelector(({ auth }) => auth);

  const notificationListener = useRef<Subscription>();
  const responseListener = useRef<Subscription>();

  useEffect(() => {
    (async () => {
      if (signed) {
        const token = await registerForPushNotificationsAsync();

        await api.post('/notifications/register', { token });
      }
    })();

    notificationListener.current =
      Notifications.addNotificationReceivedListener(notification => {
        // console.log(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(response => {
        // console.log(response.notification.request.content);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [signed]);

  return <></>;
};

const registerForPushNotificationsAsync = async () => {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      enableVibrate: true,
      showBadge: true,
    });
  }

  return token;
};
