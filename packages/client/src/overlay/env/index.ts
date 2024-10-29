import { dev, prod } from "./stages";

export default import.meta.env.DEV ? dev : prod;