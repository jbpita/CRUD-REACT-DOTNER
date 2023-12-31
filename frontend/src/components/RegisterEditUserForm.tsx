import { Cargo, Departamento } from '../interfaces/API'
import CustomSelect from "./common/CustomSelect"
import useRegisterEditUserForm from "../hooks/useRegisterEditUserForm"

interface RegisterEditUserFormProps  {
    id?: number
    departamentoProp?: Departamento,
    cargoProp?: Cargo,
    emailProp?: string,
    primerNombreProp?: string,
    segundoNombreProp?: string,
    primerApellidoProp?: string,
    segundoApellidoProp?: string,
    usuarioProp?: string
    setShow?: (value: boolean) => void
}

const RegisterEditUserForm: React.FC<RegisterEditUserFormProps> = ({
    id = 0,
    departamentoProp = {} as Departamento,
    cargoProp = {} as Cargo,
    emailProp = '',
    primerNombreProp = '',
    segundoNombreProp = '',
    primerApellidoProp = '',
    segundoApellidoProp = '',
    usuarioProp = '',
    setShow
}) => {
    
    const { 
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
    } = useRegisterEditUserForm({
        id,
        departamentoProp,
        cargoProp,
        emailProp,
        primerNombreProp,
        segundoNombreProp,
        primerApellidoProp,
        segundoApellidoProp,
        usuarioProp,
        setShow
    })

    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-row justify-around">
                    <div>
                        <div className="mb-2 text-lg" style={{'color': '#42526E'}}>
                            <label>Departamento:</label>
                        </div>
                        <CustomSelect<Departamento>
                            placeholder="Seleccione un Departamento"
                            options={departamentos}
                            currentlyValue={setDepartamento}  
                            newSelected={departamento}                          
                        />
                    </div>
                    <div>
                        <div className="mb-2 text-lg" style={{'color': '#42526E'}}>
                            <label>Cargo:</label>
                        </div>
                        <CustomSelect<Cargo>
                            placeholder="Seleccione un Cargo"
                            options={cargos}
                            currentlyValue={setCargo}
                            newSelected={cargo} 
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-around mt-8">
                    <div className="flex flex-col">
                        <div className="mb-2 text-lg" style={{'color': '#42526E'}}>
                            <label>Usuario:</label>
                        </div>
                        <div className="w-80 font-medium border rounded"  style={{'backgroundColor': '#FFF'}}>
                            <input type="text" name="usuario" onChange={e => setUsuario(e.target.value)} value={usuario} className="w-full h-full py-3 px-2 rounded-md "/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-2 text-lg" style={{'color': '#42526E'}}>
                            <label>Email:</label>
                        </div>
                        <div className="w-80 font-medium border rounded"  style={{'backgroundColor': '#FFF'}}>
                            <input type="email" name="email" onChange={e => setEmail(e.target.value)} value={email} className="w-full h-full py-3 px-2 rounded-md"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-around mt-8">
                    <div className="flex flex-col">
                        <div className="mb-2 text-lg" style={{'color': '#42526E'}}>
                            <label>Primer Nombre:</label>
                        </div>
                        <div className="w-80 font-medium border rounded"  style={{'backgroundColor': '#FFF'}}>
                            <input type="text" name="primerNombre" onChange={e => setPrimerNombre(e.target.value)} value={primerNombre} className="w-full h-full py-3 px-2 rounded-md"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-2 text-lg" style={{'color': '#42526E'}}>
                            <label>Segundo Nombre:</label>
                        </div>
                        <div className="w-80 font-medium border rounded"  style={{'backgroundColor': '#FFF'}}>
                            <input type="text" name="segundoNombre" onChange={e => setSegundoNombre(e.target.value)} value={segundoNombre} className="w-full h-full py-3 px-2 rounded-md"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-around mt-8">
                    <div className="flex flex-col">
                        <div className="mb-2 text-lg" style={{'color': '#42526E'}}>
                            <label>Primer Apellido:</label>
                        </div>
                        <div className="w-80 font-medium border rounded"  style={{'backgroundColor': '#FFF'}}>
                            <input type="text" name="primerApellido" onChange={e => setPrimerApellido(e.target.value)} value={primerApellido} className="w-full h-full py-3 px-2 rounded-md"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-2 text-lg" style={{'color': '#42526E'}}>
                            <label>Segundo Apellido:</label>
                        </div>
                        <div className="w-80 font-medium border rounded"  style={{'backgroundColor': '#FFF'}}>
                            <input type="text" name="segundoApellido" onChange={e => setSegundoApellido(e.target.value)} value={segundoApellido} className="w-full h-full py-3 px-2 rounded-md"/>
                        </div>
                    </div>
                </div>
                
                <div className="container border-t-2  text-right mt-8">
                    <button
                        onClick={() => onSubmit()}
                        style={{'backgroundColor': '#006AB2'}}
                        className="px-4 mt-4 bg-blue-500 p-3 rounded text-white hover:bg-blue-400 mr-2"
                    >
                        Registrar
                    </button>
                    <button
                        onClick={() =>  closeModal()}
                        style={{'backgroundColor': '#DFE1E5', 'color': '#42526E'}}
                        className="px-4 bg-blue-500 p-3 rounded text-white hover:bg-blue-400"
                    >
                        cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterEditUserForm