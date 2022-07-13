const { DH_NOT_SUITABLE_GENERATOR } = require("constants");

const db = { find: () => "test" };

db.companies.find({$and: [{ $or: [{ founded_year: 2005 }, { founded_month: "October" }] },{ $or: [{ category_code: "web" }, { category: "social" }] }]}).count();

db.companies.find({$and: [{ founded_year: 2004 },{ $or: [{ category_code: "web" }, { category_code: "social" }] }]}).count();

db.companies.find({$and: [{ founded_year: 2004 },{ $or: [{ category_code: "web" }, { category_code: "social" }] }]}).count();
