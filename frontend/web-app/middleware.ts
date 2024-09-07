export {auth as middleware} from "@/auth"

export const config = {
    matcher: [
        '/session'
    ],
    pages: {
        // do not import signIn from any module
        signIn: '/api/auth/signin'
    }
}