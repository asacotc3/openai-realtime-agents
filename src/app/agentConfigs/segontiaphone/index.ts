import authenticationAgent from './authentication';
import servicioTecnico from "./servicioTecnico";
import ventas from "./ventas";
import reclamaciones from "./reclamaciones";
import { injectTransferTools } from '../utils';

authenticationAgent.downstreamAgents = [servicioTecnico,ventas,reclamaciones,servicioTecnico]
servicioTecnico.downstreamAgents = [authenticationAgent,ventas,reclamaciones]
ventas.downstreamAgents = [authenticationAgent,reclamaciones,servicioTecnico]
reclamaciones.downstreamAgents = [authenticationAgent,ventas,servicioTecnico]

const agents = injectTransferTools([authenticationAgent, servicioTecnico, ventas, reclamaciones]);

export default agents;