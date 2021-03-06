import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, googleAuthProvider, database as default}

// child_removed
//database.ref('expenses').on('child_removed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val())
//})

// child_changed
//database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val())
//})

// child_added
//database.ref('expenses').on('child_added', (snapshot) => {
//    console.log(snapshot.key, snapshot.val())
//})

// database.ref('expenses').once('value').then((snapshot) => { 
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// })

// const firebaseNotes = {
//     notes: {
//         apoijasdf: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         apoijasdfpoijwe: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// }
// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
// }]

//const onValueChange = database.ref().on('value',(snapshot) => {
//    console.log(snapshot.val())
//}, (e) => {
//    console.log('Error with data fetching', e)
//})

//database.ref().off()

//database.ref().off(onValueChange)

//database.ref().once('value').then((snapshot) => {
//    const val = snapshot.val()
//    console.log(val)
//}).catch((e) => {
//    console.log('Error fetching data'e)
//})

//database.ref().set({
//    name: 'Jacob Kronqvist',
//    age: 27,
//    location: {
//        city: 'larsmo',
//        country: 'finland'
//    }
//}).then(() => {
//    console.log('Data is saved')
//}).catch((e) => {
//    console.log('This failed', e)
//})

//database.ref().update({
//    name: 'Mike',
//    age: '29',
//    job: 'software dev',
//    location: {
//        city: 'larsmo',
//        country: null
//    }
//})

//database.ref().set('This is my data')

//database.ref('name').set('Andrew')
//database.ref('location/city').set('jakobstad')

//database.ref('attributes').set({
//    height: 182,
//    weight: 85
//}).then(() => {
//    console.log('Second set call worked')
//}).catch((e) => {
//    console.log('Things didnt for the second error')
//})

//database.ref('age').remove().then(() => {
//    console.log('Data was removed')
//}).catch((e) => {
//    console.log('Did not remove data', e)
//})