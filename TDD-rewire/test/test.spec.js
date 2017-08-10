const expect = require('chai').expect;
const rewire = require('rewire');

const order = rewire('../order');

describe('Order', () => {
  beforeEach(() => {
    this.testData = { sku: 'DDD' };
    order.__set__('productionData', this.testData.sku);
  });

  it('Get order value', (done) => {
    expect(order.order()).to.equal(this.testData.sku);
    done();
  });
});
