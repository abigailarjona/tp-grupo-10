import '../login.css'
import { useState } from 'react';
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

export function Register() {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    
    const { signup } = useAuth();
    const navigate = useNavigate(); /* me permite redirigir por ejem: linea  29 ,si esta todo ok lo redirige a app*/
    const [error, setError] = useState();

    const userCollection = collection(db, "user");
    const addUser = async (e) => {
        await addDoc(userCollection, {
            id:user.email,
            name: user.email
        });
    };

    // console.log(userCollection);
    
    /* actualiza el estado   */
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
        
    };
    /*  esta es para ver lo que tiene el estado   */
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser(user);
        console.log("el usuerio registrado es ", user.email)
        setError('')
        try {
            await signup(user.email, user.password)
            navigate('/')
        } catch (error) {
            console.log(error.code);
            if (error.code === "auth/weak-password") {
                setError('Password should contain at least 6 characters');
            } else if (error.code === "auth/email-already-in-use") {
                setError('Email alredy in use');
            }
        }
    }

    return (
        <div className='contenedor'>

            <h1 className='titulo'>Register</h1>

            <form onSubmit={handleSubmit}>

                <input type="email" name='email' className="email" id="email" placeholder='Email' onChange={handleChange}></input>

                <input type="password" name='password' className="" id="password" placeholder='password' onChange={handleChange}></input>

                {error && <p>{error}</p>}
                <button type="submit" className="boton">Register</button>
            </form>

        </div>);
}

export default Register; 