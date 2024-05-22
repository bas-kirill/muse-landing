import * as E from "fp-ts/Either";
import ValueObject from "../common/ValueObject";

class Email implements ValueObject {
    static readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    value: string;

    private constructor(email: string) {
        this.value = email;
    }

    static from(email: string): E.Either<Error, Email> {
        if (!Email.emailPattern.test(email.trim())) {
            return E.left(new Email.EmailError("Invalid email"));
        }
        return E.right(new Email(email.trim()));
    }

    toStringValue(): string {
        return this.value;
    }

    static readonly EmailError = class extends Error {
        constructor(message: string) {
            super(message);
            this.name = "EmailError";
        }
    }
}

export default Email;