import React from 'react';
import Layout from '../components/template/Layout';
import Card from '../components/tasks/Card';
import NewTaskPopup from '../components/tasks/NewTaskPopup';

interface CardProps {
    title: string;
    description: string;
    dueDate: string;
    onComplete: () => void;
}


export default function Tasks(props: CardProps) {

  return (
    <Layout titulo='Tasks' 
    subtitulo='Tasks assigned to you'>
      <NewTaskPopup />
      <Card 
        title={props.title}
        description={props.description}
        dueDate={props.dueDate}
        onComplete={props.onComplete}
      />
    </Layout>
  )
}
