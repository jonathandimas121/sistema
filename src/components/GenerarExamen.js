import React, {useState} from 'react';
import './GenerarExamen.css';
import {useNavigate} from "react-router-dom";
import {db, collections, addDocs} from "../firebase";

function limpiar(){
 document.getElementById("pregunta").value="";
 document.getElementById("1").value="";
 document.getElementById("2").value="";
 document.getElementById("3").value="";
 document.getElementById("correcta").value="";
}
var contador = 0;
var examen = [
        
]

function GenerarExamen(props) {
    
    const navigate = useNavigate();
    const valoresIniciales = {
        pregunta: '',
        opcion1: '',
        opcion2: '',
        opcion3: '',
        correcta: ''
    }

    const [values, setValues] = useState(valoresIniciales);
    const [usuario, setUsuario] = useState(null);
    const [title, setTitle] = useState();

    


    const handleSubmit = async() => {
    //     const preguntas = [];
    //     const datosExamen = [];
    //     const datosCompletos = [];
    //     const querySnapshot = await getDoc(collections(db, "Examenes"));
    //           querySnapshot.forEach((doc) => {
    //           datosCompletos.push(doc.data());
    //   });
    //   console.log(datosCompletos);
    //   for(var i=0; i<datosCompletos.length; i++){
    //     datosExamen.push(datosCompletos[i].examen[0]);
    //     preguntas.push(datosCompletos[i].examen[1]);
    //     preguntas.push(datosCompletos[i].examen[2]);
    //   }

    //   console.log('Datos del examen');
    //   console.log(datosExamen);

    //   console.log('Preguntras');
    //   console.log(preguntas);
    //   console.log('Pregunta #1');
    //   console.log(preguntas[0].pregunta);
      examen = []
      contador = 0;
      navigate('/examenes');      
    }

    const handleChange = e =>{
        const {name, value} = e.target;
        console.log(name);
        console.log(value);
        setValues({...values, [name]: value});
    }


    const guardar = () => {
        
        console.log(contador);
        if(contador===0){
            examen.push({usuario,title})
            examen.push(values);
            contador++;
        }else{
            
            examen.push(values);
            contador++;
            
        }
        limpiar();
        
      console.log(examen);
      console.log(contador);
    }

    const handleChangeTitleAndUser = e => {
        setUsuario(props.userName);
        setTitle(e.target.value);
    }

    const handleSubmitGuardar = async() =>{
        try {
            await addDocs(collections(db, "Examenes"), {
                examen
               });
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <section className='form-register'>

      <h1 className='mt-0 mb-1'>Ingrese el titulo del examen</h1>
      <input onChange={handleChangeTitleAndUser} className='controls' type='text' name='title' id='title' placeholder='Ingrese el titulo del examen'/>
      <p className='mb-3'>Escriba la pregunta</p>
      <input onChange={handleChange} className='controls' type='text' name='pregunta' id='pregunta' placeholder='Ingrese la pregunta'/>
      <p className='mb-3'>Indique las posibles respuestas</p>
      <input onChange={handleChange} className='controls' type='text' name='opcion1' id='1' placeholder='Opcion 1'/>
      <input onChange={handleChange} className='controls' type='text' name='opcion2' id='2' placeholder='Opcion 2'/>
      <input onChange={handleChange} className='controls' type='text' name='opcion3' id='3' placeholder='Opcion 3'/>

      <p className='mb-3 mt-0'>Seleccione la respuesta correcta</p>
      <input onChange={handleChange} className='controls' type='text' name='correcta' id='correcta' placeholder='Correcta'/>

     <div className='flex items-center'>
     <button className='botons sepa btn btn-primary' onClick={guardar} >Siguiente Pregunta</button>
     <button className='botons sepa btn btn-primary' onClick={handleSubmitGuardar} >Guardar</button>
     <button className='botons btn btn-primary col-md-6' onClick={handleSubmit}>Salir</button>
     </div>
    </section>

    
  
  );
}

export default GenerarExamen