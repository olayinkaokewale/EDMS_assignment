import MockConfig from "./env/mock";
import ProdConfig from "./env/prod";

const IS_MOCK = true;

const Config = IS_MOCK ? MockConfig : ProdConfig;

export default Config;