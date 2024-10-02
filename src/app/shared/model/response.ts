// quote.model.ts
export interface ApiResponse<T> {
    data: T;
    status: string;
    message: string;
}

export interface Quote {
    id: string;
    content: string;
    author: string;
}


export interface Pagination {
    totalItems: number;
    currentPage: number;
    pageSize: number;
}

export interface QuoteApiResponse extends ApiResponse<Quote[]> {

    pagination: Pagination;
    // You can include additional properties specific to the QuoteApiResponse if needed
    // For example, you might want to add metadata, pagination information, etc.
    // additionalProperty: string;
}