class PostgreSQLProvider {
    constructor() {
        this.name = 'PostgreSQL';

        this.typeMap = new Map([
            ['String', 'text'],
            ['Int', 'integer'],
            ['BigInt', 'bigint'],
            ['Float', 'double precision'],
            ['Decimal', 'numeric'],
            ['Boolean', 'boolean'],
            ['DateTime', 'timestamp with time zone'],
            ['Json', 'jsonb'],
            ['Bytes', 'bytea'],
            ['Enum', 'text'],
            ['Unsupported', null]
        ]);
    }

    resolveType(type) {
        return this.typeMap.get(type);
    }

    supports(type) {
        return this.typeMap.has(type) && this.resolveType(type) !== null;
    }

    getTypeMap() {
        return Object.fromEntries(this.typeMap);
    }
}

module.exports = PostgreSQLProvider;
