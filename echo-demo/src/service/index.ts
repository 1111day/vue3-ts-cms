import REQUEST from "./module";
import { baseURL, timeout } from "./config";
const requestAc = new REQUEST({ baseURL, timeout });

export default requestAc;
