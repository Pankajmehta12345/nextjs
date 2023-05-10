import Field from "./Field";

export class Fragment extends Field {
    __construct(name) {
        super.__construct(name);
        this.name = `... on ${name}`;
    }
}