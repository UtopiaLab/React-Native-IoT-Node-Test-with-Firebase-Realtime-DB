import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBjfwaror8c-mQ738RCmbMRp0ofeP5u0-0',
  authDomain: 'iot-node-bf52d.firebaseapp.com',
  databaseURL:
    'https://iot-node-bf52d-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'iot-node-bf52d',
  storageBucket: 'iot-node-bf52d.appspot.com',
  messagingSenderId: '1055383474138',
  appId: '1:1055383474138:web:a0f0f386d44dce36837ae3',
  measurementId: 'G-0CZBK0YXEV',
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
