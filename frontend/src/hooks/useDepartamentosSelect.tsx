import { useContext, useEffect, useState } from "react"
import { APIRequestCargos, Departamento, PageTable } from "../interfaces/API"
import { UserContext } from "../context/UserContext"
import { HttpClient } from "../Api/HttpClient"


const useDepartamentosSelect = () => {
    const [ departamentos, setDepartamentos ] = useState<Departamento[]>([])
  
    const {
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
        
        const { data: dataDepartamentos, succeeded: succeededDepartamentos } = responseDepartamentos
  
        if (succeededDepartamentos)
          setDepartamentos(dataDepartamentos.items)
      }
      
      request()
    }, [])

    return {
        updateCurrentlyDepartamento,
        departamentos
    }
}

export default useDepartamentosSelect