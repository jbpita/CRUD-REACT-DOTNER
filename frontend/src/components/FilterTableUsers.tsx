import CustomSelect from "./common/CustomSelect"
import { Cargo, Departamento } from '../interfaces/API';
import Modal from "./common/Modal";
import RegisterEditUserForm from "./RegisterEditUserForm";
import useFilterTableUsers from "../hooks/useFilterTableUsers";

const FilterTableUsers = () => {
  
  const {
    cargos,
    departamentos,
    setShow,
    show,
    updateCurrentlyCargo,
    updateCurrentlyDepartamento
  } = useFilterTableUsers()
  
  return (
    <div className="mt-5 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:flex-row">
          <div className="mr-4 mb-2 md:mb-0">
            <CustomSelect<Departamento>
                placeholder="Seleccione un Departamento"
                options={departamentos}
                currentlyValue={updateCurrentlyDepartamento}
            />
          </div>
          <div className="mb-2 md:mb-0">
            <CustomSelect<Cargo>
                placeholder="Seleccione un Cargo"
                options={cargos}
                currentlyValue={updateCurrentlyCargo}
            />
          </div>
        </div>
        <div 
          className="container w-52 text-center rounded"
          style={{'backgroundColor': '#E0E2E6', 'borderRadius': '5px'}}
        >
          <button
            onClick={() => setShow(!show)}
            className="border rounder border-r-2  hover:bg-slate-400 hover:text-white items-center p-2 w-full h-full"
          >
            Crear Usuario
          </button>
          <Modal
            title="Crear Usuario"
            show={show}
            setShow={setShow}
          >
            <RegisterEditUserForm
              setShow={setShow}
            />
          </Modal>
        </div>
    </div>
  )
}

export default FilterTableUsers