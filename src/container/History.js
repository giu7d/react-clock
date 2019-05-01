import React, { Component } from 'react'
import { Grid, Typography, List, ListItem } from '@material-ui/core'
import { HistoryOutlined } from '@material-ui/icons';
import TimerContext from '../context/TimerContext';
// import Axios from 'axios';
import FirebaseService from '../services/FirebaseServices';

export default class History extends Component {

  static contextType = TimerContext;
  
  state = {
    items : []
  }
  

  // componentWillMount()
  // 
  // Método padrão do react que executa antes do ciclo de render().
  // É recomendado sua utilização para **transformação de estados**
  // na inicialização do componente.
  //
  // Nesse caso, utilizamos para inicializarmos a função pushToArray() 
  // do TIMERCONTEXT antes da inicialização dos componentes. 

  componentWillMount() {
    this.context.pushToArray = this._pushTime;
  }

  // componentDidMount()
  // 
  // Método padrão do react que executa após o ciclo de render()
  // e aciona um novo ciclo de render() após as mudanças.
  // É recomendado para atividades que possuem "Side-Effects"
  // Não é recomendado para mudança de estado, pois piora o desempenho
  // 
  // Nesse caso, utilizaremos para realizar requisições HTTP; 

  componentDidMount() {

    // Vamos user o firebase, caso só fossemos fazer uma requisição 
    // HTTP usariamos modulos como o axios, http ou request;
    // Ex:
    // Axios.get('https://jsonplaceholder.typicode.com/todos')
    //   .then(res => console.log(res));

    FirebaseService.get('times', res => {
      
      const dataArray = res.map(el => el.data.time);
      const list = [...this.state.items]    
      list.push(...dataArray);
      
      this.setState({ items: list })
    });
  }
  

  // _pushTime()
  // 
  // Este metodo será utilizado pelo componente TIMER
  // para inserir o estado do TIMERCONTEXT diretamente
  // no array items do HISTORY
  // Tambem usaremos o metodo para adicionar a informação no Firebase
  _pushTime = () => {

    const list = [...this.state.items]
    list.push(this.context.timeStr);
    this.setState({ items: list });

    FirebaseService.post(
      'times', 
      { time: this.context.timeStr },
      res => console.log(res));
  }

 
  render() {
    return (
      <Grid container 
            spacing={24}
            className="fullScreen"
            justify="center">
        <Grid item xs={10}>
          <Typography component="h2" 
                      variant="display1" 
                      gutterBottom>
          <HistoryOutlined /> Histórico
          </Typography>
          <List>
            {this.state.items.map((el, i) => <ListItem key={i}>{el}</ListItem>)}
          </List>
        </Grid>
      </Grid>
    )
  }
}
