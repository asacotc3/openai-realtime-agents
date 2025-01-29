import authenticationAgent from './authentication';
import servicioTecnico from "./servicioTecnico";
import ventas from "./ventas";
import reclamaciones from "./reclamaciones";
import { injectTransferTools } from '../utils';

authenticationAgent.downstreamAgents = [servicioTecnico,ventas,reclamaciones]
servicioTecnico.downstreamAgents = [authenticationAgent,ventas,reclamaciones]

const agents = injectTransferTools([authenticationAgent, servicioTecnico, ventas,reclamaciones]);

export default agents;