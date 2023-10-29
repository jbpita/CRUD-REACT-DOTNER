import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Usuario } from "../interfaces/API"

type TableUserProps = {
    columns: string[],
    rows: Usuario[]
}

const TableUser: React.FC<TableUserProps> = ({ columns, rows}) => {
  return (
    <div className='flex flex-row justify-center px-4 py-4 overflow-x-auto'>
        <table className="w-full table-auto border-collapse">
            <caption className="caption-bottom text-left text-slate-600">
                Total de registro: { rows.length }
            </caption>
            <thead>
                <tr className='border border-solid'>
                    {
                        columns?.map( (column, index) => (
                            <th 
                                key={index}
                                className='text-md px-6 py-6 text-slate-600'
                            >
                                { column }
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rows?.map( (row, index) => (
                        <tr 
                            key={index}
                            className='border border-solid'
                            style={{ 'color': '#435370' }}
                        >
                            <td 
                                className='text-justify px-6 py-6 text-slate-500'
                            >
                                { row.usuario}
                            </td>
                            <td 
                                className='text-justify px-6 py-6 text-slate-500'
                            >
                                { `${row.primerNombre} ${row.segundoNombre}`}
                            </td>
                            <td 
                                className='text-justify px-6 py-6 text-slate-500'
                            >
                                { `${row.primerApellido} ${row.segundoApellido}`}
                            </td>
                            <td 
                                className='text-justify px-6 py-6 text-slate-500'
                            >
                                { row.departamento?.nombre }
                            </td>
                            <td 
                                className='text-justify px-6 py-6 text-slate-500'
                            >
                                { row.cargo?.nombre }
                            </td>
                            <td 
                                className='text-justify px-6 py-6 text-slate-500'
                            >
                                { row.correo }
                            </td>
                            <td>
                                <div className="flex items-center space-x-2">
                                    <button className="flex items-center space-x-1 text-green-600 hover:text-green-800 focus:outline-none">
                                        <FaEdit
                                            size={20}
                                            color="#159649" 
                                        />
                                        <span>Editar</span>
                                    </button>

                                    <button className="flex items-center space-x-1 text-red-600 hover:text-red-800 focus:outline-none">
                                        <RiDeleteBin5Line
                                            size={20} 
                                            color="#E51156"
                                        />
                                        <span>Eliminar</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default TableUser