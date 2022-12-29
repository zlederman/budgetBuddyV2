import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {Twilio, twiml} from 'twilio'
import {SMS, ParsedSMS} from './types'
import { TWILIO_SID, TWILIO_TOKEN, TWILIO_NUMBER} from "./constants";
const {MessagingResponse} = twiml

export const SMSHandler = async (context: Context, req: HttpRequest) => {
    const sms: SMS = {
        body: req.body.Body,
        phone: req.body.From,
        timeStamp: Date.now()
    }
}