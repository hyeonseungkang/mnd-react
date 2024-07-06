export default class Config {
  constructor(
    version: string,
    brand: string,
    modelname: string,
    osVersion: string
  ) {
    this.version = version;
    this.brand = brand;
    this.modelname = modelname;
    this.osVersion = osVersion;
  }

  version: string;
  brand: string;
  modelname: string;
  osVersion: string;
}

export const initialStateConfig: Config = new Config(
  "2.1.19",
  "samsung",
  "SM-G965N",
  "10"
);
