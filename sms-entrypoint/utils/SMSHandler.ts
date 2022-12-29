import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {Twilio, twiml, validateRequest} from 'twilio'
import {parse} from 'querystring'
import {ParsedSMS} from './types'
import { TWILIO_SID, TWILIO_TOKEN, TWILIO_NUMBER,TWILIO_HOOK_URL} from "./constants";
const {MessagingResponse} = twiml

// const validateReq = (req: HttpRequest) => {

//     let twilioHeader = req.headers['x-twilio-signature']
//     if(twilioHeader !== undefined){
//         return validateRequest(TWILIO_TOKEN,twilioHeader,'https://budgetbud.xyz/api/sms',parse(req.body))
//     }
//     else{
//         throw new Error();
//     }
// }

export const SMSHandler: AzureFunction = async (context: Context, req: HttpRequest) => {
    try{
        context.log(req.headers['x-twilio-signature'])
        // const isValid = validateReq(req)
        // context.log(isValid)
        const message = req.body.Body;

        const response = new MessagingResponse();
        response.message(`Hello from TypeScript! You said "${message}"`);
        
        context.res.set("Content-Type", "application/xml");
        context.res.send(response.toString());


    }catch(e){
        context.res.status = 401
        context.res.send(e)
    }
    
    // const sms: SMS = {
    //     body: req.body.Body,
    //     phone: req.body.From,
    //     timeStamp: Date.now()
    // }
}