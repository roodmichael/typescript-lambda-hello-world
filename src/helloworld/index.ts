"use strict";

export const HELLO_STRING: string = "Hello, World";

export const index = (event: any, context: any, callback: (error: string, success?: string) => void) => {
    return callback(null, HELLO_STRING);
};
