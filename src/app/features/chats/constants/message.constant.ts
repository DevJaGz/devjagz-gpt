export enum MessageEmmiter {
  USER = 'USER', // Who is using the application
  SYSTEM = 'SYSTEM', // The engine that answers
}

export enum MessageStatus {
  PENDING = 'PENDING', // The message is waiting to be sent or processed
  SENT = 'SENT', // The message was sent successfully
  DELIVERED = 'DELIVERED', // The message was delivered to the recipient
  READ = 'READ', // The recipient has read the message
  ERROR = 'ERROR', // An error occurred while sending or processing the message
}
