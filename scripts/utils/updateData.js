export function updateData(s) {
 
    /*var fs = require('fs');
    fs.appendFile('../data.txt', s, function (err) {
        if (err) throw err;
    });*/
}
/*
import { app, firestore } from '.../firebaseConfig.js';
import { collection, doc, setDoc, getDoc, getDocs, updateDoc, Timestamp } from 'firebase/firestore';

export const updateData = async(id, attempts, data) => {
    const userDocRef = doc(collection(doc(collection(firestore, 'Users'), id), 'memoryGames'), 'data');
    const value = {
        foodTruckString: data
    }

    try {
        await setDoc(userDocRef, value);
        console.log("Document written with ID: ", id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}
*/