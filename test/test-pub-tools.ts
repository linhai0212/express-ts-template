import {toDecrypt, toEncrypt} from "../lib/PubTools";

var {describe, it} = require("mocha")
var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      const source_msg = "Hello kami!"
      const key_str = 'winner'
      const crypt_msg = toEncrypt(source_msg, key_str)
      assert.equal(source_msg, toDecrypt(crypt_msg, key_str))
    });
  });
});