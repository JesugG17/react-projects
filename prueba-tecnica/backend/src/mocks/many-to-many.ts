import { ManyToMany } from '../utils/many-to-many';
export const RELATION: ManyToMany[] = [
    {
        bookId: 1,
        authorId: 1
    },
    {
        bookId: 2,
        authorId: 1
    },
    {
        bookId: 1,
        authorId: 2
    },
    {
        bookId: 2,
        authorId: 2
    },

]