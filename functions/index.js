const functions = require('firebase-functions');
const admin=require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello abha!");
// });

const createNotification=(notification=>{
    return admin.firestore().collection('Notifications').add(notification).then(doc=>console.log("Notification added",doc))
})

exports.projectCreated = functions.firestore.document('Project/{projectId}').onCreate((doc)=>{
    const project=doc.data();
    const notification={
        content:"Added a new project",
        user:`${project.authorFirstName} ${project.authorLastName}`,
        time:admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
})

exports.userJoined = functions.auth.user().onCreate(user=>{
    return admin.firestore().collection('User').doc(user.uid).get().then(doc=>{
        const newUser=doc.data();
        const notification={
            content:"New user joined",
            user:`${newUser.firstName} ${newUser.lastName}`,
            time:admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })
})

