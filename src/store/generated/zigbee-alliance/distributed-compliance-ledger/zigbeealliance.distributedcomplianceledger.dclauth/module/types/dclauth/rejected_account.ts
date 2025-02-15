/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Account } from "./account";

export const protobufPackage = "zigbeealliance.distributedcomplianceledger.dclauth";

export interface RejectedAccount {
  account: Account | undefined;
  rejectedAccountSchemaVersion: number;
}

function createBaseRejectedAccount(): RejectedAccount {
  return { account: undefined, rejectedAccountSchemaVersion: 0 };
}

export const RejectedAccount = {
  encode(message: RejectedAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    if (message.rejectedAccountSchemaVersion !== 0) {
      writer.uint32(16).uint32(message.rejectedAccountSchemaVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RejectedAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRejectedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = Account.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.rejectedAccountSchemaVersion = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RejectedAccount {
    return {
      account: isSet(object.account) ? Account.fromJSON(object.account) : undefined,
      rejectedAccountSchemaVersion: isSet(object.rejectedAccountSchemaVersion)
        ? Number(object.rejectedAccountSchemaVersion)
        : 0,
    };
  },

  toJSON(message: RejectedAccount): unknown {
    const obj: any = {};
    if (message.account !== undefined) {
      obj.account = Account.toJSON(message.account);
    }
    if (message.rejectedAccountSchemaVersion !== 0) {
      obj.rejectedAccountSchemaVersion = Math.round(message.rejectedAccountSchemaVersion);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RejectedAccount>, I>>(base?: I): RejectedAccount {
    return RejectedAccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RejectedAccount>, I>>(object: I): RejectedAccount {
    const message = createBaseRejectedAccount();
    message.account = (object.account !== undefined && object.account !== null)
      ? Account.fromPartial(object.account)
      : undefined;
    message.rejectedAccountSchemaVersion = object.rejectedAccountSchemaVersion ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
