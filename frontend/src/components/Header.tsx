type HeaderProps = {
    children: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({children}) => {
  return (
    <div className="container px-8 my-auto py-6">
        <h1 className="text-slate-600 ">Módulo de Administración</h1>
        <p className="font-bold text-slate-600 text-2xl">Administración de Usuario</p>
        { children }
    </div>
  )
}
