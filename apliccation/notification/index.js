import { Alert, AsyncStorage } from "react-native";
import PushNotification from "react-native-push-notification";
const KEY_NOTIF = "memory:notification";

export const initialNotification = () => {
  // AsyncStorage.removeItem(KEY_NOTIF);
  const message = "Hora de memorizar!";
  AsyncStorage.getItem(KEY_NOTIF).then(result => {
    if (result) {
      PushNotification.cancelAllLocalNotifications();
     const r = Math.abs(new Date(Date.now()) - new Date(result)) / 36e5;
      console.log(r); 
      console.log("not1", new Date(result));
    } else {
      console.log("not2", result);
      PushNotification.cancelAllLocalNotifications();

      PushNotification.configure({
        onNotification: function(notification) {
          console.log("NOTIFICATION: ", notification);
        },
        popInitialNotification: true
      });

      PushNotification.localNotificationSchedule({
        message: message, // (required)
        date: new Date(Date.now()), // in 3 secs
        repeatType: "minute"
      });
      // this.setNotification();
    }
  });
};

setNotification = () => {
  AsyncStorage.setItem(KEY_NOTIF, new Date(Date.now()));
};
