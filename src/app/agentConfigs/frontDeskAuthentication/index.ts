import authenticationAgent from './authentication';
import servicioTecnico from "./servicioTecnico";
import { injectTransferTools } from '../utils';

authenticationAgent.downstreamAgents = [servicioTecnico]
servicioTecnico.downstreamAgents = [authenticationAgent]

const agents = injectTransferTools([authenticationAgent, servicioTecnico]);

export default agents;