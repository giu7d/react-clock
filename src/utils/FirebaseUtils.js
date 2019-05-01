import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDsfoQFxJH27qm3FPDeCAeHPUI-qSbev3w",
    authDomain: "timerappdemo.firebaseapp.com",
    projectId: "timerappdemo",
    databaseURL: "https://timerappdemo.firebaseio.com",
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDB = firebase.firestore();