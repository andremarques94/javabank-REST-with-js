import { Model } from "objection";
import Account from "../account/account.js";

function generateTimestamp() {
  return new Date().toISOString().slice(0, 23).replace("T", " ");
}

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

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName", "lastName", "email", "phone"],
      properties: {
        id: { type: "integer" },
        creationTime: { type: "string", format: "date-time" },
        updateTime: { type: "string", format: "date-time" },
        version: { type: "integer" },
        email: {
          type: "string",
          format: "email",
          minLength: 1,
          maxLength: 255,
        },
        firstName: { type: "string", minLength: 1, maxLength: 255 },
        lastName: { type: "string", minLength: 1, maxLength: 255 },
        phone: { type: "string", minLength: 1, maxLength: 255 },
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

export default Customer;
