import {firebaseDB} from '../utils/FirebaseUtils'

export default class FirebaseService {
    
    static get = (collection, callback) => {

        let data = []

        firebaseDB.collection(collection)
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach(doc => {
                            data.push({key: doc.id, data: doc.data()});
                        });
                        callback(data);
                    });
    }

    static post = (collection, data, callback) => {
        firebaseDB.collection(collection)
                    .add(data)
                    .then(doc => callback(doc.id))
                    .catch(error => callback(error));
    }
}