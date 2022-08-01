import { getFirestore, collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { Product } from "../context/ProductsContext";
import { firebaseApp } from './config';

const db = getFirestore(firebaseApp);

export const getAllProducts = async () => {
    const q = query(collection(db, "products"));

    const querySnapshot = await getDocs(q);
    const arrNormalProds: any = [];
    const arrPromotionalProds: any = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;
        if (data.promotion) {
            arrPromotionalProds.push({ id, ...data });
        } else {
            arrNormalProds.push({ id, ...data });
        }
    });

    return {
        normal: arrNormalProds,
        promotion: arrPromotionalProds
    }
}


export const getProductById = async (id: string) => {

    try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            
            return {ok:true, data: docSnap.data()};
        
        } else {
            return {ok:false, msg: 'No existe el producto bucado'};
        }
    } catch (error:any) {
        return {ok:false, msg: error.message};
    }

}



