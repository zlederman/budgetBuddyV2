import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {Twilio, twiml, validateRequest} from 'twilio'
import {ParsedSMS} from './types'
import { TWILIO_SID, TWILIO_TOKEN, TWILIO_NUMBER,TWILIO_HOOK_URL} from "./constants";
const {MessagingResponse} = twiml

const validateReq = (req: HttpRequest) => {
    let twilioHeader = req.headers['x-twilio-signature']
    if(twilioHeader !== undefined){
        return validateRequest(TWILIO_TOKEN,twilioHeader,req.url,{})
    }
    return false
} 

export const SMSHandler: AzureFunction = async (context: Context, req: HttpRequest) => {
    context.log(`${req.query.From} - ${req.query.Body}`)
    const isValid = validateReq(req)
    if(!isValid){
        context.log(`unauthorized - ${JSON.stringify(req)}`)
        context.res.status = 401
        context.res.send('Unauthorized')
        return
    }
    context.log(`authorized!`)
    let response = new MessagingResponse()
    response.message(`Authorized - ${req.query.Body}`)
    context.res.set('Content-Type','application/xml')
    context.res.send(response.toString())
}