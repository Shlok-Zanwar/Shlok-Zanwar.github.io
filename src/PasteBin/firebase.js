import app from "firebase/app";
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firebase-firestore'


var firebaseConfig = {
    apiKey: "AIzaSyA3_2rnMA0F-RcBYObb9v5aKhQdB5rMYdU",
    authDomain: "shlok-website.firebaseapp.com",
    projectId: "shlok-website",
    storageBucket: "shlok-website.appspot.com",
    messagingSenderId: "993579237604",
    appId: "1:993579237604:web:9f13901ca731fed1f82cf1",
    measurementId: "G-CNF32VVWZE"
};


class Firebase {

    constructor() {
        app.initializeApp(firebaseConfig);
        // this.auth = app.auth();
        this.db = app.firestore();
    }


    // login(email, password) {
	// 	return this.auth.signInWithEmailAndPassword(email, password)
	// }


    // async register(name, email, password) {
	// 	await this.auth.createUserWithEmailAndPassword(email, password)
	// 	return this.auth.currentUser.updateProfile({
	// 		displayName: name
	// 	})
	// }


    addData (url, data) {
        this.db.doc(`pastebin/${url}`).set({
            data
        })
    }


    async getData (url) {
        const abc = await this.db.doc(`pastebin/${url}`).get();
        return abc.get('data');
    }

}

export default new Firebase()