import React, { use } from 'react'
import Titulo from './Titulo'
import BotaoAlterarTema from './BotaoAlterarTema'
import useAppData from '../../data/hook/useAppData'
import AvatarUsuario from './AvatarUsuario'

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps) {
  const { tema, alterarTema } =  useAppData()

  return (
    <div className='flex'>
        <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
        <div className='flex flex-grow justify-end items-center'>
            <BotaoAlterarTema tema={tema} alterarTema={alterarTema}/>
            <AvatarUsuario className='bg-white m-2 p-1'/>
        </div>
    </div>
  )
}

