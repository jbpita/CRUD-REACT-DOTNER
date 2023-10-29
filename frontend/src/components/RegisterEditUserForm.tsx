import useCargosSelect from "../hooks/useCargosSelect"
import useDepartamentosSelect from "../hooks/useDepartamentosSelect"
import { Cargo, Departamento } from '../interfaces/API';
import CustomSelect from "./common/CustomSelect"


const RegisterEditUserForm = () => {
    const { departamentos, updateCurrentlyDepartamento } = useDepartamentosSelect()
    const { cargos, updateCurrentlyCargo } = useCargosSelect()

    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <div>
                        <div className="mb-2 text-lg">
                            <label>Departamento:</label>
                        </div>
                        <CustomSelect<Departamento>
                            placeholder="Seleccione un Departamento"
                            options={departamentos}
                            currentlyValue={updateCurrentlyDepartamento}
                        />
                    </div>
                    <div>
                        <div className="mb-2 text-lg">
                            <label>Cargo:</label>
                        </div>
                        <CustomSelect<Cargo>
                            placeholder="Seleccione un Cargo"
                            options={cargos}
                            currentlyValue={updateCurrentlyCargo}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-8">
                    <div className="flex flex-col">
                        <div className="mb-2 text-lg">
                            <label>Usuario:</label>
                        </div>
                        <div className="w-80 font-medium border rounded"  style={{'backgroundColor': '#FFF'}}>
                            <input type="text" name="usuario" className="w-full h-full py-3 px-2 rounded-md"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-2 text-lg">
                            <label>Email:</label>
                        </div>
                        <div className="w-80 font-medium border rounded"  style={{'backgroundColor': '#FFF'}}>
                            <input type="text" name="email" className="w-full h-full py-3 px-2 rounded-md"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-8">
                    <div className="flex flex-col">
                        <div className="mb-2 text-lg">
                            <label>Primer Nombre:</label>
                        </div>
                        <div className="w-80 font-medium border rounded"  style={{'backgroundColor': '#FFF'}}>
                            <input type="text" name="primerNombre" className="w-full h-full py-3 px-2 rounded-md"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-2 text-lg">
                            <label>Segundo Nombre:</label>
                        </div>
                        <div className="w-80 font-medium border rounded"  style={{'backgroundColor': '#FFF'}}>
                            <input type="text" name="segundoNombre" className="w-full h-full py-3 px-2 rounded-md"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-8">
                    <div className="flex flex-col">
                        <div className="mb-2 text-lg">
                            <label>Primer Apellido:</label>
                        </div>
                        <div className="w-80 font-medium border rounded"  style={{'backgroundColor': '#FFF'}}>
                            <input type="text" name="primerApellido" className="w-full h-full py-3 px-2 rounded-md"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-2 text-lg">
                            <label>Segundo Apellido:</label>
                        </div>
                        <div className="w-80 font-medium border rounded"  style={{'backgroundColor': '#FFF'}}>
                            <input type="text" name="segundoApellido" className="w-full h-full py-3 px-2 rounded-md"/>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                            <button
                            
                            className="modal-close px-4 bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-400"
                            >
                            
                            </button>
                        </div>
            </div>
        </div>
    )
}

export default RegisterEditUserForm