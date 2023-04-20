import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: '508824793301-qlii40tnf123jodeair85m9vqo4c721n.apps.googleusercontent.com',
        clientSecret:'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'
    })
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)


GoogleProvider({
    clientId: '508824793301-qlii40tnf123jodeair85m9vqo4c721n.apps.googleusercontent.com',
    clientSecret:'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'
})
