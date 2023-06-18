import { Schema, model } from "mongoose";
import { Author } from "./author.model";

interface IBook {
    title: string;
    description: string;
    author: Schema.Types.ObjectId;
    keywords: object[];
}

const keywordsSchema = new Schema({
    keyword: String
})

const bookSchema = new Schema<IBook>({
    title: String,
    description: String,
    author: { type: Schema.Types.ObjectId, ref: "Author" },
    keywords: [keywordsSchema]
})

export const Keywords = model<IBook>('Keywords', keywordsSchema);
export const Book = model<IBook>('Book', bookSchema);