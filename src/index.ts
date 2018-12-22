import { index as helloIndex } from "./helloworld";

interface ILambdaExamples {
    hello: (event: any, context: any, callback: (error: string, success: any) => void) => void;
}

(exports as ILambdaExamples).hello = helloIndex;
