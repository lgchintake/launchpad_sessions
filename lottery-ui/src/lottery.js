import web3 from "./web3";
import lotteryAbi from "./ABIs/lottery.abi.json";
import { contractAddress } from "./config";

export default new web3.eth.Contract(lotteryAbi, contractAddress);
