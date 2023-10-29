import { useState } from "react";
import useCargosSelect from "../hooks/useCargosSelect"
import useDepartamentosSelect from "../hooks/useDepartamentosSelect"
import { APIRequestCrearUsuarios, APIResponse, Cargo, Departamento, Usuario } from '../interfaces/API';
import CustomSelect from "./common/CustomSelect"
import { HttpClient } from "../Api/HttpClient";


const RegisterEditUserForm = () => {
    const { departamentos  } = useDepartamentosSelect()
    const { cargos } = useCargosSelect()

    const [ departamento, setDepartamento ] = useState<Departamento>({} as Departamento)
    const [ cargo, setCargo ] = useState<Cargo>({} as Cargo)
    const [ usuario, setUsuario ] = useState<string>('')
    const [ email, setEmail ] = useState<string>('')
    const [ primerNombre, setPrimerNombre ] = useState<string>('')
    const [ segundoNombre, setSegundoNombre ] = useState<string>('')
    const [ primerApellido, setPrimerApellido ] = useState<string>('')
    const [ segundoApellido, setSegundoApellido ] = useState<string>('')
    

    const onSubmit = async () => {
        const response = await HttpClient.post<APIResponse<Usuario>,APIRequestCrearUsuarios>(
            '/Usuario/createUsuario',
            {
                correo: email,
                primerNombre,
                segundoApellido,
                primerApellido,
                segundoNombre,
                usuario,
                idCargo: cargo.id,
                idDepartamento: departamento.id,
                id: 0
            }
        )

        console.log('response:', response)

    }

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