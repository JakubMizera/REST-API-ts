import {object, string, TypeOf} from 'zod';
export const createUserSchema = object({
    body: object({
        name: string({
            required_error: 'Name is required'
        }),
        password: string({
            required_error: 'Password is required'
        }).min(6, 'Password must be at least 6 chars long'),
        passwordConfirmation: string({
            required_error: 'Password confirmation is required'
        }),
        email: string({
            required_error: 'Email is required'
        }).email('Not a valid email')
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: 'Passwords must be the same',
        path: ['passwordConfirmation'],
    }),
})

// Omitting body.passwordConfirmation
export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "body.passwordConfirmation">