export default interface IProduct{
    _id?: string | number;
    image: string | FileList;
    name: string;
    price: number;
    discount_price?: number;
    short_description?: string;
    categoryId: number;
    stock: number;
    author: string;
    description: string;
    publisher?: string;
    page_num?: number;
    publishing_year?: number;
    language?: string;
}