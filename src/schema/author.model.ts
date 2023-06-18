import { Schema, model } from "mongoose";

interface IAuthor {
    name: string
}

const authorSchema = new Schema<IAuthor>({
    name: String
})

export const Author = model<IAuthor>('Author', authorSchema);