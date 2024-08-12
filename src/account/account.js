import { Model } from "objection";

class Account extends Model {
  static get tableName() {
    return "account";
  }

  static get relationMappings() {
    const Customer = import("../customer/customer.js");
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

  static get jsonSchema() {
    return {
      type: "object",
      required: ["account_type", "balance", "customer_id"],
      properties: {
        id: { type: "integer" },
        account_type: { type: "string", minLength: 1, maxLength: 255 },
        balance: { type: "number" },
        version: { type: "integer" },
        customer_id: { type: "integer" },
        creationTime: { type: "string", format: "date-time" },
        updateTime: { type: "string", format: "date-time" },
      },
    };
  }

  $beforeInsert() {
    this.creationTime = generateTimestamp();
    this.updateTime = generateTimestamp();
    this.version = 1;
  }

  $beforeUpdate() {
    this.updateTime = generateTimestamp();
    this.version += 1;
  }
}

export default Account;
