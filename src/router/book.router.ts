import { Router } from 'express';
const bookRoutes = Router();

import { Book } from "../schema/book.model";
import { Author } from '../schema/author.model';
import multer from 'multer';
const upload = multer();

bookRoutes.get('/create', (req, res) => {
    try {
        res.render("createBook");
    } catch (error) {
        res.render(error.message);
    }
});

bookRoutes.post('/create', upload.none(), async (req, res) => {
    try {
        const authorNew = new Author({
            name: req.body.author
        })
        const bookNew = new Book({
            title: req.body.title,
            description: req.body.description,
            author: authorNew,
        });
        bookNew.keywords.push({ keyword: req.body.keyword });
        const p1 = authorNew.save();
        const p2 = bookNew.save();
        let [author, book] = await Promise.all([p1, p2]);
        book ? res.redirect("/list") : res.render("error");
    } catch (err) {
        res.render("error");
    }
});

bookRoutes.post('/update', upload.none(), async (req, res) => {
    try {
        let book = await Book.findOne({ _id: req.body.id });
        book.title = req.body.title;
        book.description = req.body.description;
        book.author = req.body.author;
        await book.save();
        book ? res.redirect("/list") : res.render("error");
    } catch (err) {
        res.render("error");
    }
});

bookRoutes.get('/list', async (req, res) => {
    try {
        let query = {};
        if (req.query.keyword) {
            let keywordFind = req.query.keyword || "";
            query = {
                "keywords.keyword": {
                    $regex: keywordFind
                }
            }
        }
        const books = await Book.find(query).populate({
            path: "author", select: "name"
        });
        res.render("listBook", { books: books });
    } catch {
        res.render("error");
    }
});

bookRoutes.get('/update/:id', async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });
        book ? res.render("updateBook", { book: book }) : res.render("error");
    } catch (err) {
        res.render("error");
    }
});

bookRoutes.delete('/delete/:id', async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });
        book ? (await book.deleteOne() && res.status(200).json({ message: "success" })) : res.render("error");
    } catch (err) {
        res.render("error");
    }
});

export default bookRoutes;