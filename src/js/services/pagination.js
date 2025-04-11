class PaginationService {
    static page = 1;


    getNextPage() {
        PaginationService.page + 1;
        return PaginationService.page;
    }

    getPreviousPage() {
        PaginationService.page - 1;
        return PaginationService.page;
    }

    getCurrentPage() {
        return PaginationService.page;
    }
}
 
export { PaginationService };