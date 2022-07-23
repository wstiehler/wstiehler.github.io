export class Config {

    existingNodejs: boolean;
    existingVsCode: boolean;
    comandTypescript: string;
    comandInitTypescript: string;
    comandMonitoringTs: string;
    tsConfig:any;

    constructor(){
        return null;
    }

    verifyExistingNodejs(){
        if (this.existingNodejs) {
            console.log("Nodejs is installed");
        } else {
            console.warn("Nodejs is not installed");
        }
    }
    
    verifyExistingVsCode(){
        if (this.existingVsCode) {
            console.log("VSCode is installed");
        } else {
            console.warn("VSCode is not installed");
        }
    }

    verifyComandTypescript(){
        if (this.comandTypescript) {
            console.log("Typescript is installed");
        } else {
            console.warn("Typescript is not installed");
        }
    }

    verifyComandInitTypescript(){
        if (this.comandInitTypescript) {
            console.log("Init Typescript is installed");
        } else {
            console.warn("Init Typescript is not installed");
        }
    }

    verifyComandMonitoringTs(){
        if (this.comandMonitoringTs) {
            console.log("Monitoring Typescript is installed");
        } else {
            console.warn("Monitoring Typescript is not installed");
        }
    }

    verifyTsConfig(){
        if (this.tsConfig) {
            console.log("TsConfig is installed");
        } else {
            console.warn("TsConfig is not installed");
        }
    }

    verifyConfigurationInit(){
        this.verifyExistingNodejs();
        this.verifyExistingVsCode();
        console.log("Execute no terminal", this.verifyComandTypescript());
        console.log("Execute no terminal", this.verifyComandInitTypescript());
        console.log("Execute no terminal", this.verifyComandMonitoringTs());
        console.log("Escreva no arquivo tsconfig.json", this.verifyTsConfig());

    }


}