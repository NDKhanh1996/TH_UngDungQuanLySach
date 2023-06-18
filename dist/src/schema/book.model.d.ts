/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from "mongoose";
interface IBook {
    title: string;
    description: string;
    author: Schema.Types.ObjectId;
    keywords: object[];
}
export declare const Keywords: import("mongoose").Model<IBook, {}, {}, {}, import("mongoose").Document<unknown, {}, IBook> & Omit<IBook & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>;
export declare const Book: import("mongoose").Model<IBook, {}, {}, {}, import("mongoose").Document<unknown, {}, IBook> & Omit<IBook & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>;
export {};
