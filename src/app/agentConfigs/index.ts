import { AllAgentConfigsType } from "@/app/types";
import frontDeskAuthentication from "./frontDeskAuthentication";
import customerServiceRetail from "./customerServiceRetail";
import segontiaphone from "./segontiaphone";
import simpleExample from "./simpleExample";

export const allAgentSets: AllAgentConfigsType = {
  segontiaphone,
  customerServiceRetail
};

export const defaultAgentSetKey = "segontiaphone";
