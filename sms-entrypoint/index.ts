import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { SMSHandler } from "./utils/SMSHandler";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    SMSHandler(context,req)
};

export default httpTrigger;