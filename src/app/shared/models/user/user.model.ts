export class User {
    id?: string
    name?: string
    email?: string
    password?: string
    userType?: number // 1 = admin , 2 = vendor , 3 = customer
    phone?: number
    status?: boolean
    createdAt?: Date
}
