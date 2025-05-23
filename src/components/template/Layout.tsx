import React from 'react'
import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import useAppData from '../../data/hook/useAppData'
import ForcarAutenticacao from '../auth/ForcarAutenticacao'

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
  const { tema }  = useAppData()

  return (
    <ForcarAutenticacao>
      <div className={`${tema} flex h-screen w-screen`}>
          <MenuLateral />
          <div className={`
            flex flex-col w-full p-7
            bg-primary-light dark:bg-primary-darkBrown text-primary-brown dark:text-primary-light
            `}>
            <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
            <Conteudo>
                {props.children}
            </Conteudo>
          </div>
      </div>
    </ForcarAutenticacao>
  )
}
