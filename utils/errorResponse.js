class errorResponse extends Error{
    constructor(messages, statusCode){
        super(this.message)
        this.statusCode = statusCode
    }
}

module.exports = errorResponse;
