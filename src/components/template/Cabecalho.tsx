import React, { use } from 'react'
import Titulo from './Titulo'
import AvatarUsuario from './AvatarUsuario'

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <div className='flex'>
        <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
        <div className='flex flex-grow justify-end items-center'>
            <AvatarUsuario className='m-2 p-1'/>
        </div>
    </div>
  )
}

