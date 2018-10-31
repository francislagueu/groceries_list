import { createConnection } from 'typeorm';

export const Connection = async () => {
    await createConnection();
}