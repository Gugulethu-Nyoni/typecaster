class OverrideRegistry {

    constructor() {
        this.overrides = new Map();
    }

    register(type, override) {
        if (!type) {
            throw new Error('Override type is required');
        }

        if (!override || typeof override !== 'object') {
            throw new Error(
                `Override for "${type}" must be an object`
            );
        }

        this.overrides.set(type, override);

        return override;
    }

    resolve(type) {
        return this.overrides.get(type);
    }

    has(type) {
        return this.overrides.has(type);
    }

    remove(type) {
        return this.overrides.delete(type);
    }

    getAll() {
        return Array.from(this.overrides.entries()).map(
            ([type, override]) => ({
                type,
                ...override
            })
        );
    }

    clear() {
        this.overrides.clear();
    }

    size() {
        return this.overrides.size;
    }
}

export default OverrideRegistry;
