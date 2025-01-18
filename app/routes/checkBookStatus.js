function checkBookStatus(book) {
    return book.Bestsellers && book.Suggestions 
        ? "ขายดีและแนะนำ"
        : book.Bestsellers 
        ? "ขายดี"
        : book.Suggestions 
        ? "แนะนำ"
        : "ไม่ได้ขายดีและไม่ได้แนะนำ";
}
