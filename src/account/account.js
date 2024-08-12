import { Model } from "objection";

function generateTimestamp() {
  return new Date().toISOString().slice(0, 23).replace("T", " ");
}

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

  credit(amount) {
    if (amount <= 0) throw new Error("Amount must be greater than 0");
    if (!Number.isInteger(amount)) throw new Error("Amount must be an integer");

    this.balance += amount;
  }

  debit(amount) {
    if (amount <= 0) throw new Error("Amount must be greater than 0");
    if (!Number.isInteger(amount)) throw new Error("Amount must be an integer");
    if (this.balance < amount) throw new Error("Insufficient funds");

    this.balance -= amount;
  }
}

export default Account;
