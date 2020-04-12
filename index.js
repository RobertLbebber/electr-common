const Cat = require("./endpoints/Catalog");
const Sch = require("./schemas/index");

export const Catalog = Cat;
export const Schemas = Sch;
export default { ApiCatalog: Catalog, DatabaseSchemas: Schemas };
