export interface Event {
    guild_id?: bigint;
    user_id?: bigint;
    created_at: number;
    data: any;
    event: string;
}