import { FormControl } from '@angular/forms';
 
export class AmountValidator {
 
    static isValid(control: FormControl): any {
 
        if(isNaN(control.value)){
            return {
                "not a valid amount": true
            };
        }
 
        if(control.value < 0){
            return {
                "not a positive amount": true
            };
        }
 
        return null;
    }
 
}