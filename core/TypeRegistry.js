class TypeRegistry {

    constructor() {
        this.types = new Map();
    }

    register(name, definition) {
        if (!name) {
            throw new Error('Type name is required');
        }

        if (!definition || typeof definition !== 'object') {
            throw new Error(
                `Type definition for "${name}" must be an object`
            );
        }

        this.types.set(name, {
            name,
            ...definition
        });

        return this.types.get(name);
    }

    resolve(name) {
        return this.types.get(name);
    }

    has(name) {
        return this.types.has(name);
    }

    getAll() {
        return Array.from(this.types.values());
    }

    remove(name) {
        return this.types.delete(name);
    }

    clear() {
        this.types.clear();
    }
}

export default TypeRegistry;
