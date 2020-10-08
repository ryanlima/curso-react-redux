import React from 'react'
import ReactDOM from 'react-dom'

import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <div>
    {/* <Saudacao nome="Ryan" tipo="Bom Dia"/> */}
    {/* <Pai nome="Ryan" sobrenome="Lima" /> */}
    <Pai nome="Ryan" sobrenome="Lima" >
      <Filho nome="Pedro" sobrenome="Lima" />
      <Filho nome="Paulo" sobrenome="Lima" />
      <Filho nome="Carla" sobrenome="Lima" />
      {/* <Filho {...props}/>
      <Filho {...props} nome="Carla"  /> */}
    </Pai>

  </div>
, document.getElementById('root'))
    