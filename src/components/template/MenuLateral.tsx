import useAuth from "../../data/hook/useAuth"
import { Settings, House, Logout, Bell, Tasks } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

export default function MenuLateral() {

    const { logout } = useAuth()

    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-black
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-100 to-purple-100
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Home" icone={House} />
                <MenuItem url="/tasks" texto="Tasks" icone={Tasks} />
                <MenuItem url="/settings" texto="Settings" icone={Settings} />
                <MenuItem url="/notificacoes" texto="Notifications" icone={Bell} />
            </ul>
            <ul>
                <MenuItem
                    texto="Sair" icone={Logout} 
                    onClick={logout}
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}

