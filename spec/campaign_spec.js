describe("campaignNumber", function(){
  context("30歳以上の配偶者がある男性の場合", function(){
    const A = {age: 30, marrid: true, sex: 1};
    const B = {age: 30, marrid: false, sex: 1};
    const C = {age: 30, marrid: true, sex: 0};
    const D = {age: 29, marrid: true, sex: 1};

    it("1 を返す", function(){
      expect(campaignNumber(A)).to.be(1);
      expect(campaignNumber(B)).to.not.be(1);
      expect(campaignNumber(C)).to.not.be(1);
      expect(campaignNumber(D)).to.not.be(1);
    });
  });

  context("20代の独身女性の場合", function(){
    const A = {age: 20, married: false, sex: 0};
    const B = {age: 29, married: false, sex: 0};
    const C = {age: 30, married: false, sex: 0};
    const D = {age: 20, married: true, sex: 0};
    const E = {age: 20, married: false, sex: 1};

    it("2 を返す", function(){
      expect(campaignNumber(A)).to.be(2);
      expect(campaignNumber(B)).to.be(2);
      expect(campaignNumber(C)).to.not.be(2);
      expect(campaignNumber(D)).to.not.be(2);
      expect(campaignNumber(E)).to.not.be(2);
    });
  });

  context("配偶者のある女性の場合", function(){
    const A = {age: 20, married: true, sex: 0};
    const B = {age: 20, married: false, sex: 1};
    const C = {age: 20, married: false, sex: 0};

    it("3を返す", function(){
      expect(campaignNumber(A)).to.be(3);
      expect(campaignNumber(B)).to.not.be(3);
      expect(campaignNumber(C)).to.not.be(3);
    });
  });

  context("それ以外の場合", function(){
    const A = {age: 29, marrid: true, sex: 1};
    const B = {age: 30, marrid: false, sex: 1};
    const C = {age: 19, married: false, sex: 0};
    const D = {age: 30, married: false, sex: 0};

    const E = {age: 30, marrid: true, sex: 1};
    const F = {age: 20, married: false, sex: 0};
    const G = {age: 29, married: false, sex: 0};
    const H = {age: 20, married: true, sex: 0};

    it("4を返す", function(){
      expect(campaignNumber(A)).to.be(4);
      expect(campaignNumber(B)).to.be(4);
      expect(campaignNumber(C)).to.be(4);
      expect(campaignNumber(D)).to.be(4);
      expect(campaignNumber(E)).to.not.be(4);
      expect(campaignNumber(F)).to.not.be(4);
      expect(campaignNumber(G)).to.not.be(4);
      expect(campaignNumber(H)).to.not.be(4);
    });
  });
});

describe("countCampaign1Targets", function(){
  const list =[
    {age: 30, marrid: true, sex: 1},
    {age: 30, marrid: false, sex: 1},
    {age: 30, marrid: true, sex: 0},
    {age: 29, marrid: true, sex: 1}
  ];

  if("配列の要素のうち、キャンペーン1の対象者数を返す", function(){
    epxect(countCampaign1Targets(list)).to.be(1);
  });
});
