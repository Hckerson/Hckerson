type LogLevel = "info" | "warn" | "error";

type LogContext = Record<string, unknown>;

const serialize = (value: unknown) =>
    value instanceof Error
        ? { name: value.name, message: value.message, stack: value.stack }
        : value;

const write = (level: LogLevel, message: string, context: LogContext = {}) => {
    const entry = Object.fromEntries(
        Object.entries(context).map(([key, value]) => [key, serialize(value)]),
    );
    console[level](JSON.stringify({ ...entry, level, message }));
};

export const logger = {
    info: (message: string, context?: LogContext) =>
        write("info", message, context),
    warn: (message: string, context?: LogContext) =>
        write("warn", message, context),
    error: (message: string, context?: LogContext) =>
        write("error", message, context),
};
