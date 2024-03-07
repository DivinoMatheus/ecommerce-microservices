export const isUniqueError = (error: Error) => {
    return Boolean(error.message.includes("duplicate key value violates unique constraint"))
}