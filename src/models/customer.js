import { Model } from "objection";
import Account from "./account.js";

class Customer extends Model {
  static get tableName() {
    return "customer";
  }

  static get relationMappings() {
    return {
      accounts: {
        relation: Model.HasManyRelation,
        modelClass: Account,
        join: {
          from: "customer.id",
          to: "account.customer_id",
        },
      },
    };
  }
}

export default Customer;
