import { useEffect, useState } from "react"

type UseModalProps = { 
    show: boolean
    setShow: (value: boolean) =>void,
}


const useModal = ({setShow,show}: UseModalProps) => {
    const [ isOpenModal, setIsOpenModal ] = useState<boolean>(false)
    
    useEffect(() => {
        setIsOpenModal(show)
    }, [show])
    
    const closeModal = () => {
      setIsOpenModal(false);
      setShow(false)
    }

    return {
        isOpenModal,
        closeModal,
    }
}

export default useModal