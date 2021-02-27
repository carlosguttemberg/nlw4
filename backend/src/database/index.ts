import { Connection, createConnection, getConnectionOptions } from "typeorm"

export default async (name = 'default'): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions() 
    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test' ? 
            'nlw4-test' : defaultOptions.database,
            keepConnectionAlive: true,
        })
    )
}