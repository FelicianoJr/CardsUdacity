import { AsyncStorage } from "react-native";
import PushNotification from "react-native-push-notification";
const KEY_NOTIFICATION = "memory:notification";

export const initialNotification = () => {
  AsyncStorage.getItem(KEY_NOTIFICATION).then(result => {
    if (!result) {
      confirmNotification();
      return;
    }
    const hour = Math.abs(new Date(Date.now()) - new Date(result)) / 36e5;
    if (hour >= 24) {
      confirmNotification();
    }
  });
};

confirmNotification = () => {
  const message = "Hora de memorizar!";
  AsyncStorage.removeItem(KEY_NOTIFICATION);
  PushNotification.cancelAllLocalNotifications();

  PushNotification.configure({
    onNotification: function(notification) {
      console.log("NOTIFICATION: ", notification);
    },
    popInitialNotification: true
  });

  let date = new Date();
  date.setDate(date.getDate() + 1);

  PushNotification.localNotificationSchedule({
    message: message, // (required)
    date: date, // in  secs
    repeatType: "day"
  });

  this.setNotification();
};

setNotification = () => {
  AsyncStorage.setItem(KEY_NOTIFICATION, new Date(Date.now()));
};
