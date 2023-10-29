import { ReactNode, createContext, useState } from "react";
import { Cargo, Departamento } from "../interfaces/API";

interface UserContextProps {
    currentlyDepartamento: Departamento,
    currentlyCargo: Cargo,
    updateCurrentlyCargo: ( alue: Departamento ) => void
    updateCurrentlyDepartamento: ( alue: Departamento ) => void
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [ currentlyDepartamento, setCurrentlyDepartamento ] = useState<Departamento>({} as Departamento)
    const [ currentlyCargo, setCurrentlyCargo ] = useState<Cargo>({} as Cargo)

    const updateCurrentlyDepartamento = ( value: Departamento ) => {
        setCurrentlyDepartamento(value)
    }

    const updateCurrentlyCargo = ( value: Cargo ) => {
        setCurrentlyCargo(value)
    }

    return (
        <UserContext.Provider
            value={{
                updateCurrentlyCargo,
                updateCurrentlyDepartamento,
                currentlyCargo,
                currentlyDepartamento
            }}
        >
            { children }
        </UserContext.Provider>
    )
}