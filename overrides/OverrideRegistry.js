class OverrideRegistry {

    constructor() {
        this.overrides = new Map();
    }

    register(modelName, fieldName, override) {

        if (!modelName) {
            throw new Error('Model name is required');
        }

        if (!fieldName) {
            throw new Error('Field name is required');
        }

        if (!override || typeof override !== 'object') {
            throw new Error(
                `Override for "${modelName}.${fieldName}" must be an object`
            );
        }

        const key = this.createKey(
            modelName,
            fieldName
        );

        this.overrides.set(key, {
            modelName,
            fieldName,
            ...override
        });

        return this.overrides.get(key);
    }

    resolve(modelName, fieldName) {

        const key = this.createKey(
            modelName,
            fieldName
        );

        return this.overrides.get(key);
    }

    has(modelName, fieldName) {

        const key = this.createKey(
            modelName,
            fieldName
        );

        return this.overrides.has(key);
    }

    remove(modelName, fieldName) {

        const key = this.createKey(
            modelName,
            fieldName
        );

        return this.overrides.delete(key);
    }

    getAll() {

        return Array.from(
            this.overrides.values()
        );
    }

    clear() {

        this.overrides.clear();
    }

    size() {

        return this.overrides.size;
    }

    createKey(modelName, fieldName) {

        return `${modelName}.${fieldName}`;
    }
}

export default OverrideRegistry;
