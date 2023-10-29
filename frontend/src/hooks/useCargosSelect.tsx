import { useContext, useEffect, useState } from "react"
import { APIRequestCargos, Cargo, PageTable } from "../interfaces/API"
import { UserContext } from "../context/UserContext"
import { HttpClient } from "../Api/HttpClient"


const useCargosSelect = () => {
    const [ cargos, setCargos ] = useState<Cargo[]>([])
  
    const {
      updateCurrentlyCargo
    } = useContext(UserContext)
  
    useEffect(() => {
      const request = async () => {
        const responseDepartamentos = await HttpClient
          .post<PageTable<Cargo>,APIRequestCargos>(
            '/Cargo/GetCargos',
            {
              pageNumber: 1,
              pageSize: 20,
              search: ""
            }
          )
        
        const { data: dataDepartamentos, succeeded: succeededDepartamentos } = responseDepartamentos
  
        if (succeededDepartamentos)
          setCargos(dataDepartamentos.items)
      }
      
      request()
    }, [])

    return {
        updateCurrentlyCargo,
        cargos
    }
}

export default useCargosSelect