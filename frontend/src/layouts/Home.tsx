import { useContext, useEffect, useState } from "react"
import FilterTableUsers from "../components/FilterTableUsers"
import { Header } from "../components/Header"
import TableUser from "../components/TableUser"
import Body from "../components/common/Body"
import { COLUMNS } from "../constants/TableUser"
import { APIRequestCargos, PageTable, Usuario } from "../interfaces/API"
import { HttpClient } from "../Api/HttpClient"
import { UserContext } from "../context/UserContext"


const Home = () => {

    const [ users, setUsers ] = useState<Usuario[]>([])

    const request = async (search: string) => {
        const responseUsuarios = await HttpClient
            .post<PageTable<Usuario>,APIRequestCargos>(
                '/Usuario/getUsuarios',
                {
                    pageNumber: 1,
                    pageSize: 20,
                    search
                }
            )
        const { succeeded, data } = responseUsuarios

        if ( succeeded )
                setUsers(data.items)
    }
    
    const {
        currentlyCargo,
        currentlyDepartamento
    } = useContext(UserContext)

    useEffect(() => {
      request("")
    }, [])

    useEffect(() => {
        request(`${currentlyCargo?.id ?? ''}`)
    }, [currentlyCargo])
    
    useEffect(() => {
        request(`${currentlyDepartamento?.id ?? ''}`)
    }, [currentlyDepartamento])

    return (
        <div className="container h-screen w-full my-auto">
            <div className=" h-full">
                <div className="container h-2/5 md:h-44 w-full border-b-2 border-slate-300 shadow-sm ">
                    <Header>
                        <FilterTableUsers/>
                    </Header>
                </div>
                <div className="container h-full w-17/20 px-10 py-4">
                    <Body>
                        <TableUser
                            columns={COLUMNS}
                            rows={users}
                        />
                    </Body>
                </div>
            </div>
        </div>
    )
}

export default Home