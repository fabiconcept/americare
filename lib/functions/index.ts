export const clientId = process.env.NEXT_PUBLIC_SIRV_ClIENT_ID!;
export const clientSecret = process.env.NEXT_PUBLIC_SIRV_ClIENT_SECRET!;

interface TokenResponse {
    token: string;
    expiresIn: number;
    scope: string[];
}

export const fetchToken = async (): Promise<string> => {
    try {
        const response = await fetch('https://api.sirv.com/v2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ clientId, clientSecret }),
        });

        if (!response.ok) {
            throw new Error(`This happened: ${response.statusText}`);
        }

        const data: TokenResponse = await response.json();
        const token = data.token;
        return token;
    } catch (error) {
        throw error;
    }
};