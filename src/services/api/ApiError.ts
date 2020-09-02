export class ApiError extends Error {
    private readonly _errorCode: string;
    private readonly _originalError: any

    constructor(errorCode: string, originalError?: any) {
        super(errorCode)
        this._errorCode = errorCode;
        this._originalError = originalError;
    }

    get errorCode(): string {
        return this._errorCode;
    }

    isErrorCode(code: string): boolean {
        return this._errorCode === code;
    }

    get originalError(): any {
        return this._originalError;
    }
}