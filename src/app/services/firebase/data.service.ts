import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbPath = 'users';
  usersRef: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list(this.dbPath);
  }

  create(user: User): any {
    return this.usersRef.push(user);
  }

  getAll(): AngularFireList<User>{
    return this.usersRef;
  }
}


