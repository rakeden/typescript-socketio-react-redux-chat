export interface Message {
    from: string;
    text: string;
}

export interface ChatState {
    messages: Message[];
}
