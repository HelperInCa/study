var BigNumber = require('bignumber.js');
var run = require('./framework.js');

contract('Dutch Auction', function (accounts) {

  it("doesn't reject a finalize after accepting a bid with no judge", function (done) {
    run(accounts, done, {
      type:                "dutch",
      reservePrice:        500,
      judgeAddress:        0,
      biddingTimePeriod:   10,
      offerPriceDecrement: 25,
      actions: [
        { block: 1, action: "bid",      account: 1, payment: 725, succeed: true,  on_error: "Valid bid rejected" },
        { block: 2, action: "finalize",                           succeed: false, on_error: "Early finalize accepted" },
      ],
    });
  });
});
