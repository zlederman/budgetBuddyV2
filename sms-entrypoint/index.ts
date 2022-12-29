import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {Twilio, twiml} from 'twilio'
import { TWILIO_SID, TWILIO_TOKEN, TWILIO_NUMBER} from "./utils/constants";
const {MessagingResponse} = twiml

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const response = new MessagingResponse()
    context.log('HTTP trigger function processed a request.')
    response.message('The Robots are coming! Head for the hills!');
    context.res.set('Content-Type','application/xml')
    context.res.send(response.toString());

};

export default httpTrigger;