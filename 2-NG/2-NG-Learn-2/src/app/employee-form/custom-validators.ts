import { AbstractControl } from "@angular/forms";



export function myAgeValidator(c: AbstractControl): { [key: string]: boolean } | null {
    let value = c.value;
    if (value >= 18 && value <= 58) {
        return null;
    } else {
        return { age: true }
    }
}

export function myAgeValidatorWithRange(min, max) {
    return function (c: AbstractControl): { [key: string]: boolean } | null {
        let value = c.value;
        if (value >= min && value <= max) {
            return null;
        } else {
            return { age: true }
        }
    }
}

export function emailCompare(c: AbstractControl): { [key: string]: boolean } | null {
    let emailControl = c.get('email');
    let cEmailControl = c.get('cEmail');
    if (emailControl.value !== cEmailControl.value) {
        return { 'ematch': true };
    }
    else return null;
}
