import  firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/auth';
import Swal from "sweetalert2";

const firebaseConfig = {
    
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };
  // Initialize Firebase

  const fire= firebase.initializeApp(firebaseConfig);
  const storage= firebase.storage();
 

  const auth = firebase.auth();
  const googleProvider= new firebase.auth.GoogleAuthProvider()
  const signInWithGoogle = () =>{
      auth.signInWithPopup(googleProvider).then((res)=>{
          Swal.fire({
              icon:'success',
              title:`Bienvenido ${res.user.displayName}`,
              showConfirmButton:true,
              showDenyButton:false,
              confirmButtonText:'Continuar'
          })

      }).catch((error) =>{
          console.log(error.message)
      })
  }

  const logOut= () =>{
      auth.signOut().then(()=>{
        Swal.fire({
            icon:'warning',
            title:'¿estas seguro de cerrar sesion?',
            showConfirmButton:true,
            showDenyButton:false,
            confirmButtonText:'Continuar'
        })
      }).catch((error)=>{
          console.log(error.message)
      })
  }

  export{
      fire,storage,firebase,auth,signInWithGoogle,logOut,
  }