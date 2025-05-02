export const errorHandeler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
        status:statusCode,
        message: "Something went wrong!",
        error: error.message
    });
}