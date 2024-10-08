export interface GoogleTokenExchangeDto {
    access_token: string,
    expires_in: Number,
    refresh_token: string,
    scope: string[],
    token_type: string
}