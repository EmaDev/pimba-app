import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { getFirestore,doc,setDoc,getDoc} from "firebase/firestore";
import {firebaseApp} from './config';

export const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export interface UserData {
    uid: string;
    name: string;
    email: string;
    phone: string;
    photoURL:string;
    createdAt: {
        lastLoginAt: string;
        creationTime: string;
    }
}
export const createUserWithEmailandPasswordAuth = async(email:string,pass:string) => {

   try {
     const {user} = await createUserWithEmailAndPassword(auth, email, pass);
     const data:UserData = {
        uid: user.uid,
        email: (user.email) ? user.email : '',
        name: user.displayName || '',
        phone: user.phoneNumber || '',
        photoURL: user.photoURL || '',
        createdAt: {
            creationTime: user.metadata.creationTime || '',
            lastLoginAt: user.metadata.lastSignInTime || ''
        }
     }
     const docRef = await setDoc( doc(db, "users", user.uid), data);
     
     return {ok: true, msg: 'Cuenta creada correctamente', user: data};

   } catch (error:any) {
     return {ok: true, msg: error.message, user:null};
   }
};

export const signInWithEmailAndPasswordAuth = async(email:string,pass:string) => {

    try {
        const {user} = await signInWithEmailAndPassword(auth,email, pass);
        const docRef = doc(db, "users", user.uid);
        const userData = await getDoc(docRef);
        
        return {ok:true, msg: 'Ingreso correcto', user: userData.data()}

    } catch (error:any) {
        return {ok:false, msg: error.message, user: null}
    }
}

export const logOut = () => {
    signOut(auth);
}


//Check if is a logged
interface Props {
    setUser?: (user:any) => void;
}
export const checkIfIsLogged = async (setUser:any) => { 
    onAuthStateChanged(auth, async(user) => {
        if(user) {
           
            const docRef = doc(db, "users", user.uid);
            const userData = await getDoc(docRef);
            setUser(userData.data());
        }else{
            return {ok:false, msg: 'No esta loguedo', user: null};
        }
    });
};