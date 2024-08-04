import { Model } from "objection";

class Account extends Model {
  static get tableName() {
    return "account";
  }

  static get relationMappings() {
    const Customer = import("./customer.js");
    return {
      customer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Customer,
        join: {
          from: "account.customer_id",
          to: "customer.id",
        },
      },
    };
  }

  static get modifiers() {
    return {
      defaultSelects(builder) {
        builder.select("id", "account_type", "balance", "customer_id");
      },
    };
  }
}

export default Account;
