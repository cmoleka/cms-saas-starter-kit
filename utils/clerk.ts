import type { UserJSON, User } from '@clerk/nextjs/server'

/*
 * Get the first email address from the user's Clerk session
 * @param session - Clerk UserJSON session
 * @returns firstEmail - string
*/
export const ClerkGetFirstEmail = (session: UserJSON) => {
    // All user emails
    const emails = session?.email_addresses;
    // Get the first email at index 0
    const firstEmail = String(emails.map((item, index) => {
        if (index === 0) {
            return item.email_address
        }
    })[0])
    // Return the first email
    return firstEmail;
}

export const ClerkGetFirstEmailUser = (emailsList: User['emailAddresses']) => {
    // All user emails
    const emails = emailsList;
    // Get the first email at index 0
    const firstEmail = String(emails.map((item, index) => {
        if (index === 0) {
            return item.emailAddress
        }
    })[0])
    // Return the first email
    return firstEmail;
}
