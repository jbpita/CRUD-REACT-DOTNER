import { useEffect, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

type CustomSelectProps<T extends { nombre: string }> = {
    placeholder: string,
    options: T[],
    currentlyValue: (value: T) => void
}

function CustomSelect<T extends { nombre: string }>({placeholder,options,currentlyValue}: CustomSelectProps<T>) {
  
  const [ selected, setSelected ] = useState<T>({} as T)
  const [ open, setOpen ] = useState<boolean>(false)

  useEffect(() => {
    currentlyValue(selected)
  }, [selected])

  return (
    <div className="w-80 font-medium relative">
        <div 
          onClick={() => setOpen(!open)}
          className={`
          bg-slate-200 text-slate-400 w-full p-2 flex items-center justify-between rounded h-12
            ${
              !selected && 'text-gray-800'
            }
          `}
        >
          <p className='text-md'>
            {
              selected?.nombre?.substring(0,29) ?? placeholder
            }
          </p>
          <AiFillCaretDown
            size={20}
            color="#445769"
          />
        </div> 
        <ul 
          className={`
            w-full
            bg-white mt-2 overflow-y-auto rounded
            ${ open 
                ? 'max-h-60 border'
                : 'max-h-0'
            }
          `}
          style={{ position: 'absolute', zIndex: 9999 }}
        >
          {
            options?.map( (option,index) => (
              <li
                key={index}
                onClick={ () => {
                  setSelected(option)
                  setOpen(false)
                } }
                className={`
                  p-2 text-sm hover:bg-slate-400 hover:text-white
                  ${
                    option?.nombre?.toLowerCase() === selected?.nombre?.toLocaleLowerCase()
                    && 'bg-slate-400 text-white'
                  }
                `}
              >
                  {option.nombre ?? ''}
              </li>
            ))
          }
        </ul>    
    </div>
  )
}

export default CustomSelect