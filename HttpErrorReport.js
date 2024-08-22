class HttpErrorReport extends Error {
    constructor(message, status, statusText, url) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        this.statusText = statusText;
        this.url = url;
    }
}
module.export = HttpErrorReport;
