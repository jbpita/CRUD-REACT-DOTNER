import { useState } from 'react'
import useDepartamentosSelect from './useDepartamentosSelect'
import useCargosSelect from './useCargosSelect'
import { APIRequestCrearUsuarios, APIResponse, Cargo, Departamento, Usuario } from '../interfaces/API'
import { HttpClient } from '../Api/HttpClient'

type UseRegisterEditUserFormProps = {
    id: number
    departamentoProp: Departamento,
    cargoProp: Cargo,
    emailProp: string,
    primerNombreProp: string,
    segundoNombreProp: string,
    primerApellidoProp: string,
    segundoApellidoProp: string,
    usuarioProp: string
    setShow?: (value: boolean) => void
 }

const useRegisterEditUserForm = ({
    id ,
    departamentoProp,
    cargoProp,
    emailProp, 
    primerNombreProp, 
    segundoNombreProp,
    primerApellidoProp, 
    segundoApellidoProp, 
    usuarioProp,
    setShow
}: UseRegisterEditUserFormProps) => {
    
    const [ departamento, setDepartamento ] = useState<Departamento>(departamentoProp)
    const [ cargo, setCargo ] = useState<Cargo>(cargoProp)
    const [ usuario, setUsuario ] = useState<string>(usuarioProp)
    const [ email, setEmail ] = useState<string>(emailProp)
    const [ primerNombre, setPrimerNombre ] = useState<string>(primerNombreProp)
    const [ segundoNombre, setSegundoNombre ] = useState<string>(segundoNombreProp)
    const [ primerApellido, setPrimerApellido ] = useState<string>(primerApellidoProp)
    const [ segundoApellido, setSegundoApellido ] = useState<string>(segundoApellidoProp)

    const { departamentos  } = useDepartamentosSelect()
    const { cargos } = useCargosSelect()
    
    const closeModal = () => setShow && setShow(false)

    const onSubmit = async () => {
        let url = '/Usuario/createUsuario'
        let method = HttpClient.post
        if ( id ){
            url = '/Usuario/updateUsuario'
            method = HttpClient.put
        }
        
        const response = await method<APIResponse<Usuario>,APIRequestCrearUsuarios>(
            url,
            {
                correo: email,
                primerNombre,
                segundoApellido,
                primerApellido,
                segundoNombre,
                usuario,
                idCargo: cargo.id,
                idDepartamento: departamento.id,
                id
            }
        )

        console.log('response:', response)

    }

    return {
        departamentos,
        setDepartamento,
        departamento,
        cargo,
        cargos,
        setCargo,
        usuario,
        setUsuario,
        primerNombre,
        setPrimerNombre,
        segundoApellido,
        segundoNombre,
        primerApellido,
        setPrimerApellido,
        setSegundoApellido,
        setSegundoNombre,
        setEmail,
        email,
        closeModal,
        onSubmit
    }
}

export default useRegisterEditUserForm