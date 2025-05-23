import React from 'react';
import Layout from '../components/template/Layout';
import useAppData from '../data/hook/useAppData';
import SelectChangeTheme from '../components/settings/SelectChangeTheme';
import { SelectLanguage } from '../components/settings/SelectLanguage';

export default function Settings() {
  const { tema, alterarTema } =  useAppData()

  return (
    <Layout titulo='Settings' 
    subtitulo='Personalize your experience here'>
      
    <SelectChangeTheme theme={tema} changeTheme={alterarTema}/>
    <SelectLanguage />

    </Layout>
  )
}
