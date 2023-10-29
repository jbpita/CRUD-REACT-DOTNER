import React, { useEffect, useState } from 'react'

type ModalProps = { 
    title: string
    children: React.ReactNode
    show: boolean
    setShow: (value: boolean) =>void
}

const Modal: React.FC<ModalProps> = ({title, children, show, setShow}) => {
    const [ isOpenModal, setIsOpenModal ] = useState<boolean>(false)
    
    useEffect(() => {
        setIsOpenModal(show)
    }, [show])

    // const openModal = () => {
    //     setIsOpenModal(show);
    // };
    
    const closeModal = () => {
      setIsOpenModal(false);
      setShow(false)
    };
    
    return (
        <div>
            {isOpenModal &&(
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-container bg-white w-11/12 md:max-w-3xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold">{title}</p>
                            <div className="modal-close cursor-pointer z-50" onClick={closeModal}>
                                <svg
                                    className="fill-current text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                    d="M13.41 12.99l-4.95-4.95 4.95-4.95 1.42 1.41-4.95 4.95 4.95 4.95-1.42 1.41-4.95-4.95-4.95 4.95-1.41-1.41 4.95-4.95-4.95-4.95 1.41-1.41 4.95 4.95 4.95-4.95 1.41 1.41z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="my-5">
                            { children }
                        </div>
                        <div className="text-right">
                            <button
                            
                            className="modal-close px-4 bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-400"
                            >
                            
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                    </div>
            )}
        </div>
    )
}

export default Modal