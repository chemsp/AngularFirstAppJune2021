export class AuthService {


    token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
     eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.
     yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw`

    login() {
        debugger
        // call to api for login
        localStorage.setItem('token', this.token)

    }

    logout() {
        // call to api for logout
        localStorage.removeItem('token')

    }


}
