import { AllAgentConfigsType } from "@/app/types";
import frontDeskAuthentication from "./frontDeskAuthentication";
import customerServiceRetail from "./customerServiceRetail";
import segontiaphone from "./segontiaphone";
import simpleExample from "./simpleExample";

export const allAgentSets: AllAgentConfigsType = {
  frontDeskAuthentication,
  customerServiceRetail,
  simpleExample,
  segontiaphone
};

export const defaultAgentSetKey = "simpleExample";
