export class Field {
    alias = '';

    children = [];

    args = [];

    __construct(name) {
        this.name = name;
    }

    addField(field) {
        if (typeof field === 'string') {
            this.children.push(new Field(field));
        } else if (field instanceof Field) {
            this.children.push(field);
        }

        return this;
    }

    setAlias(alias) {
        this.alias = `${alias}:`;

        return this;
    }

    addFieldList(fieldList) {
        fieldList.forEach(this.addField.bind(this));

        return this;
    }

    addArgument(name, type, value) {
        this.args.push({
            name,
            type,
            value
        });

        return this;
    }
}
export default Field;