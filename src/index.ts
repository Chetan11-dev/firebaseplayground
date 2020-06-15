import fa from './firebaseinitweb'
const fs = fa.firestore()

//  TODO : Perform operations as you want here and they will be performed on save
// Have a look at firebaseinitweb
fs.collection('product').doc('1dcmPGdk58zL4i2LOxQn').get().then((doc) => {
    const data = doc.data()
    console.log(JSON.stringify({ ...data, sid: ' data?.sid' }))
}).catch((e) => console.log(e))