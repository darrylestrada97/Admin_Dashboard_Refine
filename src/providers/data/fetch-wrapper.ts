import { GraphQLFormattedError } from "graphql";


type Error = {
    message: string;
    statusCode: string;
};

const customFetch = async (url: string, options: RequestInit) => {
    const accessToken = localStorage.getItem("accessToken");
    const headers = options.headers as Record<string, string>;
    return await fetch(url, {
        ...options,
        headers: {
            ...headers, Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            "Apollo-Require-Preflight": "true"
        }
    });
};

const getGraphQLErros = (body: Record<"errors", GraphQLFormattedError[] | undefined>): Error | null => {
    if (!body) {
        return {
            message: "No response from the server",
            statusCode: "INTERNAL_SERVER_ERROR"
        };
    }
    if ("errors" in body) {
        const errors = body?.errors
        const message = errors?.map((error) => error?.message).join("");
        const code = errors?.[0]?.extensions?.code;
        return {
            message: message || JSON.stringify(errors),
            statusCode: code || 500
        };
    }

    return null;
}

export const fetchWrapper = async (url: string, options: RequestInit) => {
    const response = await customFetch(url, options);
    const responseClone = response.clone();
    const body = await responseClone.json();
    const error = getGraphQLErros(body);
    if (error) {
        throw error;
    }
    return response;
}
