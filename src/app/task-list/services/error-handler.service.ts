import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ 
    providedIn: 'root' 
})
export class ErrorHandlerService { 

    constructor(private matSnackBar: MatSnackBar) {}

    public handleError(): void {
        this.matSnackBar.open('Wystąpił nieoczekiwany błąd, spróbuj ponownie później', 'X');
    }
}
