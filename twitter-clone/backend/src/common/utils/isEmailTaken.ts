import { User } from "../models/schemas/user.schema";

export const isEmailTaken = async(email: string) => {

    const user = await User.findOne({ email });

    if (user) {
        throw new Error('This email is already taken');
    }

}