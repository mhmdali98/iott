import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class AuthProvider {

  constructor(public firestore:AngularFirestore) {
  }
 async register(name ,email , password ){
    return await firebase.auth().createUserWithEmailAndPassword(email,password).then((res)=>{
      const id = this.firestore.createId();
     this.firestore.doc(`users/${id}`).set({
      id,
      name,
      email
    });
    });

  }
  login(email , password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email , password)
      .then(res => {
        resolve(res);
      }, err => reject(err) );
    });
  }
}
