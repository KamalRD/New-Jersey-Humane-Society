import { compact, first } from "lodash";
import { ZodError } from "zod";

const UNKNOWN_ERROR_MESSAGE = "An unknown error occurred";


export function getZodErrorMessage<T>(zodError: ZodError<T>): string {
    const { formErrors, fieldErrors } = zodError.flatten(({ message }) => message);
    const errorMessages = compact(Object.values<string[] | undefined>(fieldErrors)).flat();
    return first(errorMessages) ?? first(formErrors) ?? UNKNOWN_ERROR_MESSAGE;
}

export function buildClassNames(...classes: Array<string>): string {
    return classes.filter(Boolean).join(" ");
}