export const ErrorHandler = (error, req, res, next) => {
    return res.status(error.status || 500).json({
        message: error.message,
        status: error.status,
        stack: error.stack
    });
};

export const NotFoundError = (req, res, next) => {
    const error: any = new Error('Not found...');
    error.status = 404;
    next(error);
};