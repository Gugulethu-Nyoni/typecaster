class OverrideRegistry {
    constructor() {
        this.overrides = new Map();
    }

    register(type, override) {
        if (!type) {
            throw new Error('Type name is required');
        }

        if (!override || typeof override !== 'object') {
            throw new Error(`Override for "${type}" must be an object`);
        }

        this.overrides.set(type, {
            type,
            ...override
        });

        return this.overrides.get(type);
    }

    resolve(type) {
        return this.overrides.get(type);
    }

    has(type) {
        return this.overrides.has(type);
    }

    getAll() {
        return Array.from(this.overrides.values());
    }

    remove(type) {
        return this.overrides.delete(type);
    }

    clear() {
        this.overrides.clear();
    }

    size() {
        return this.overrides.size;
    }
}

module.exports = OverrideRegistry;
