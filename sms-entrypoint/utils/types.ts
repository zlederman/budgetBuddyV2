
export interface ParsedSMS {
    phone: string
    timeStamp: number
    command: string
    category: string
    args: Array<string>
}