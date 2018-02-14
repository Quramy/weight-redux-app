const config = process.env.NODE_ENV !== 'production' ? {
  apiKey: 'AIzaSyBKakvyeW7yAI-v4hyC9HGhqxACOLgnfEk',
  authDomain: 'todays-weight-dev.firebaseapp.com',
  databaseURL: 'https://todays-weight-dev.firebaseio.com',
  projectId: 'todays-weight-dev',
  storageBucket: 'todays-weight-dev.appspot.com',
  messagingSenderId: '874961984617',
} : {
  apiKey: 'AIzaSyBKakvyeW7yAI-v4hyC9HGhqxACOLgnfEk',
  authDomain: 'todays-weight-dev.firebaseapp.com',
  databaseURL: 'https://todays-weight-dev.firebaseio.com',
  projectId: 'todays-weight-dev',
  storageBucket: 'todays-weight-dev.appspot.com',
  messagingSenderId: '874961984617',
};

module.exports = config;
