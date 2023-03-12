import { FormData } from "./survey-form"

// W przypadku zwrócenia stringa wiemy że wartość jest niepoprawna
// W przypadku null wartośc sie poprawna
export type Validator = (value: string) => string | null

// keyof FormData => klucza w interfejsie FormData
const keysOfFormData: keyof FormData = 'name'

export type ValidationDefinition = {
    [T in keyof FormData]: {
        validators: Validator[]
    }
}


export const validationDefinition: ValidationDefinition = {
    name: {
        validators: [
            (value: string) => value.length >= 3 ? null : 'Imię powinno mieć minimum 3 znaki',
            (value: string) => value.length <= 20 ? null : 'Imię powinno mieć maksymalnie 20 znaków',
        ]
    },
    // address: {
    surname: {
        validators: [
            (value: string) => value.length >= 5 ? null : 'Nazwisko powinno mieć minimum 5 znaki',
            (value: string) => value.length <= 30 ? null : 'Nazwisko powinno mieć maksymalnie 30 znaków',
        ]
    },
    gender: {
        validators: []
    }
}


// //Wartosc
// const name = '';

// if(name.length === 0){
//     //error
// }

// if(name.length === 0){
//     //error
// }

// const validator = (value: string) => value.length >= 5 ? null : 'Wartośc powinna miec minimum 5 znaków'