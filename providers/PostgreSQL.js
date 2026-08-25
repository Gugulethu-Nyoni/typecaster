class PostgreSQLProvider {

    constructor(options = {}) {
        this.options = options;
    }

    getName() {
        return 'PostgreSQL';
    }

    getTypeMapping() {
        return {
            String: 'text',
            Int: 'integer',
            BigInt: 'bigint',
            Float: 'double precision',
            Decimal: 'numeric',
            Boolean: 'boolean',
            DateTime: 'timestamp',
            Json: 'jsonb',
            Bytes: 'bytea'
        };
    }

    resolveType(type) {
        const mapping = this.getTypeMapping();

        return mapping[type] || null;
    }

    supports(type) {
        return this.resolveType(type) !== null;
    }
}

export default PostgreSQLProvider;
