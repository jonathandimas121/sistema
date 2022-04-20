import React,{useState, useEffect} from 'react'
import CardExamenes from './CardExamenes'
import NavBarAlumno from './NavBarAlumno'
import {db, collections, getDoc} from "../firebase";
import { Route, Routes } from 'react-router-dom';
import Preguntas from './Preguntas';
 


function ResponderExamen(props) {

  const [lista, setLista] = useState([])

  useEffect(() =>{
    const obtenerDatos = async() =>{
      try {
        const datosCompletos = []
        const querySnapshot = await getDoc(collections(db,'Examenes'))
        querySnapshot.forEach((doc)=>{
        datosCompletos.push({...doc.data(), id:doc.id})
        })
        
        const examenes = []
        for(var i=0; i<datosCompletos.length; i++){
        var id = datosCompletos[i].id
        var title = datosCompletos[i].examen[0].title
        var usuario = datosCompletos[i].examen[0].usuario
        examenes.push({id,title,usuario})
      }

      setLista(examenes);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerDatos()
  },[lista])


  return (
    <div className='w-full'>
    <NavBarAlumno userName={props.userName}></NavBarAlumno>
    <Routes>
      <Route path='/preguntas' element={<Preguntas></Preguntas>} component={Preguntas}></Route>
    </Routes>
    <div className='bg-cyan-400 w-3/4 h-3/4 m-auto mt-5 shadow rounded'>
      <div className='border border-2px h-9 bg-white text-center'>
        <label className='font-serif ml-2 text-2xl'>Exámenes Disponibles</label>
      </div>
      <div>
      {
        lista.map((examen) => {
          return(
            <CardExamenes 
            key={examen.id}
            id={examen.id}
            title={examen.title}
            imageUrl='https://i.pinimg.com/originals/49/c8/e4/49c8e403cd1929e9e7b02126824ff831.jpg'
            body={examen.usuario}
            />
          )
        })
      }
      </div>
    </div>
  </div> 
  )

}

export default ResponderExamen