import { createContext, useContext } from "react";
import{createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';
import {auth } from '../firebaseConfig/firebase'


/* esto nos permite que cualquier componenete pueda acceder al contexto de si esta logeado el usuario o no 
,si se importa en el componente 
-voy a poner esto envolviendo la app por que es el que contiene a todos los componentes*/

 export const authContext = createContext();  

/* useAuth es la que me devuelve el valor del usuario ,en si es un hook*/
  export const useAuth = () => {
    const context= useContext(authContext)

   
    return context;
 }
    
 /*authprovider devuelve un componenete en este caso signup/ login */
export function AuthProvider({children}) {

     const signup = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password); 

      const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    

    return <authContext.Provider value={{signup, login }}>{children} </authContext.Provider>;
}

/* 
createUserWithEmailAndPassword me permite mediante a la autenficacion de firebase creae un usuario con los datos asignados email y password


signInWithEmailAndPassword  me permite ingresar a travez de la autenficacion 
*/