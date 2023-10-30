import { useContext, useEffect, useState } from "react"
import CustomSelect from "./common/CustomSelect"
import { HttpClient } from "../Api/HttpClient"
import { APIRequestCargos, Cargo, Departamento, PageTable } from '../interfaces/API';
import { UserContext } from "../context/UserContext";
import Modal from "./common/Modal";
import RegisterEditUserForm from "./RegisterEditUserForm";



const FilterTableUsers = () => {
  const [ departamentos, setDepartamentos ] = useState<Departamento[]>([])
  const [ cargos, setCargos ] = useState<Departamento[]>([])
  const [ show, setShow ] = useState<boolean>(false)
  

  const {
    updateCurrentlyCargo,
    updateCurrentlyDepartamento
  } = useContext(UserContext)

  useEffect(() => {
    const request = async () => {
      const responseDepartamentos = await HttpClient
        .post<PageTable<Departamento>,APIRequestCargos>(
          '/Departamento/GetDepartamentos',
          {
            pageNumber: 1,
            pageSize: 20,
            search: ""
          }
        )

      const responseCargos = await HttpClient
        .post<PageTable<Cargo>,APIRequestCargos>(
          '/Cargo/GetCargos',
          {
            pageNumber: 1,
            pageSize: 20,
            search: ""
          }
        )
      
      const { data: dataDepartamentos, succeeded: succeededDepartamentos } = responseDepartamentos
      const { data: dataCargos, succeeded: succeededCargos } = responseCargos

      if (succeededDepartamentos)
        setDepartamentos(dataDepartamentos.items)
      if (succeededCargos)
        setCargos(dataCargos.items)
    }
    
    request()
  }, [])
  
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