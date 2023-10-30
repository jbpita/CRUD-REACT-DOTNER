import React, { useEffect, useState } from 'react'
import { HttpClient } from '../Api/HttpClient'
import { APIResponse, Usuario } from '../interfaces/API';

type DeleteUserProps = {
    usuario: Usuario,
    setShow?: (value: boolean) => void
}

const DeleteUser: React.FC<DeleteUserProps> = ({usuario,setShow}) => {

    const [ userCurrently, setUserCurrently ] = useState<Usuario>({} as Usuario)

    useEffect(() => {
      setUserCurrently(usuario)
    }, [usuario])
    

    const closeModal = () => setShow && setShow(false)

    const onSubmit = async (usuario: Usuario) => {
        const response = await HttpClient.post<APIResponse<number>,Usuario>(
            '/Usuario/DeleteUsuario',
            usuario
        )
        
        const { data, succeeded } = response

        if ( succeeded) 
            console.log(`Usuario #${data} eliminado correctamente`)
    }
    
    return (
        <div>
            <p>¿Está seguro de eliminar el usuario seleccionado?</p>
            <div className="container text-right mt-8 flex flex-row-reverse">
                <div>
                    <button
                        onClick={() => closeModal()}
                        style={{'backgroundColor': '#FFF', 'color': '#2F7DE3'}}
                        className="px-4 mt-4 p-3 rounded  hover:bg-blue-400"
                    >
                        cancelar
                    </button> 
                </div>
                <div >
                    <button
                        onClick={() => onSubmit(userCurrently)}
                        style={{'backgroundColor': '#2F7DE3'}}
                        className="px-4 mt-4 p-3 rounded text-white mr-2"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteUser