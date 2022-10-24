
import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';
import Rodape from './componentes/Rodape/Rodape';

function App() {

  const times = [
    {
      nome:'-Selecione-',
    },
    {
      nome:'Top Animes',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9',
    },
    {
      nome:'Personagens',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF',
    },
    {
      nome:'Comédia',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2',
    },
    {
      nome:'Drama',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8',
    },
    {
      nome:'Ação',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5',
    },
    { 
      nome:'Aventura',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9',
    },
    {
      nome:'Suspence',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9',
    },
    {
      nome:'Romance',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF',
    },
    {
      nome:'Mistério',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF',
    },
    {
      nome:'Sci-Fi',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  function aoNovoColaboradorAdicionado(colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
      <Rodape />

    </div>
  );
}

export default App;




