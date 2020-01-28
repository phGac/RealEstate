export interface RequestValue {
    url: string,
    method: string,
    query?: any,
    bodyParams?: any,
    headers?: any,
};

class RequestNotFound extends Error {
    status: number;
    request: RequestValue|undefined;

    constructor(message: string|undefined = 'The request is not found.', status: number = 404) {
        super(message);
        this.name = 'RequestNotFound';
        this.status = status;
    }

    toString() {
        if(this.request)
            return `${this.name} [${this.request.method}]: ${this.message} on ${this.request.url}`;
        else
            return `${this.name}: ${this.message}`;
    }
}

export default RequestNotFound;
