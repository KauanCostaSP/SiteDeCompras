import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles.css'
import Teste from "./InfoX/teste";
import Contador from "./InfoX/comunicacaoComps/contador";
import Pedido from "./InfoX/comunicacaoComps/finalizacaoPedido/pedido";
import ConclusaoPedido from "./InfoX/comunicacaoComps/finalizacaoPedido/conclusao";
import App from './InfoX/home'
import DetalheProduto from './InfoX/detalheProduto'
import Carrinho from './InfoX/carrinho'
import NTC from './infoC/NTC/home'
import NTCDenunciaDetalhada from './infoC/NTC/denunciaDetalhada'
import SWT from './infoD/SweetCherry'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
