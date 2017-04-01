import { Injectable, ErrorHandler, Output, EventEmitter  } from '@angular/core';

@Injectable()
export class LoggingErrorHandler implements ErrorHandler {
    errorMessage: string;
    // @Output() errorHandled$ = new EventEmitter();

    handleError(error: any): void {
        this.errorMessage = error;

        //this.errorHandled$.emit({
        //    value: error
        //});


        //console.log(`--- from custom handler --- at ${new Date()}`);
        console.log('--- this error has ---- Digesting');
        console.log(`--- this error has ---- ${error}`);
    }
}



