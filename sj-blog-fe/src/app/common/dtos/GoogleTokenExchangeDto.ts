export interface GoogleTokenExchangeDto {
    access_token: String,
    expires_in: Number,
    refresh_token: String,
    scope: String[],
    token_type: String
}