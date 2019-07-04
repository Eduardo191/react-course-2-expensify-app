import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
/*database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});

database.ref('expenses').once('value').then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);    
})

database.ref('expenses').push({
    description: 'Water bill',
    note: 'This is the latest water bill',
    amount: 3500,
    createdAt: 1000
});

database.ref('notes/-LisGHKl-VK6l77O0Zj_').remove();

database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

database.ref().once('value').then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
}).catch((error) => {
    console.log('Error fetching data', error);
});

database.ref().set({
    name: 'Eduardo Ferreira',
    age: 18,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Orlando',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

database.ref().remove().then(() => {
    console.log('Data was removed');
}).catch((error) => {
    console.log('Did not remove data', error);
});*/



