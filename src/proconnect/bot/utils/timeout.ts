// Helper function to enforce a timeout on a Promise
export function withTimeout<T>(promise: Promise<T>, ms: number, errorMessage?: string): Promise<T> {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error(errorMessage || `Operation timed out after ${ms}ms`));
        }, ms);
        promise
            .then(result => {
                clearTimeout(timer);
                resolve(result);
            })
            .catch(err => {
                clearTimeout(timer);
                reject(err);
            });
    });
}