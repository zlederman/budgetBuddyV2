export interface SMS {
    body: string
    phone: string
    timeStamp: number
}

export interface ParsedSMS {
    phone: string
    timeStamp: number
    command: string
    category: string
    args: Array<string>
}