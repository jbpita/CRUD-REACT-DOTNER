import useCargosSelect from "../hooks/useCargosSelect"
import useDepartamentosSelect from "../hooks/useDepartamentosSelect"
import { Cargo, Departamento } from "../interfaces/API"
import CustomSelect from "./common/CustomSelect"


const RegisterEditUserForm = () => {
    const { departamentos, updateCurrentlyDepartamento } = useDepartamentosSelect()
    const { cargos, updateCurrentlyCargo } = useCargosSelect()
    return (
        <div>
            <div className="grid grid-cols-2 grid-flow-col gap-2">
                <div>
                    <CustomSelect<Departamento>
                        placeholder="Seleccione un Departamento"
                        options={departamentos}
                        currentlyValue={updateCurrentlyDepartamento}
                    />
                </div>
                <div>
                    <CustomSelect<Cargo>
                        placeholder="Seleccione un Cargo"
                        options={cargos}
                        currentlyValue={updateCurrentlyCargo}
                    />
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default RegisterEditUserForm