export interface AuthResponse {
    data: null | Data;
    message: string;
    code: number;
}

interface Data {
    user: User;
    token?: string;
}

interface User {
    userName: string;
    photoUrl: string | undefined;
}