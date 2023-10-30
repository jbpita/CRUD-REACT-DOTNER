import { useContext, useEffect, useState } from "react"
import { HttpClient } from "../Api/HttpClient"
import { APIRequestCargos, Cargo, Departamento, PageTable } from "../interfaces/API"
import { UserContext } from "../context/UserContext"


const useFilterTableUsers = () => {
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

    return {
        updateCurrentlyCargo,
        updateCurrentlyDepartamento,
        departamentos,
        cargos,
        show,
        setShow,
    }
}

export default useFilterTableUsers