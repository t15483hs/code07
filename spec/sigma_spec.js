descibe("squareSum", function(){
  it("1からその数までの二乗和を返す", function(){
    expect(squareSum(10)).to.be(385);
    expect(squareSum(1000)).to.be(33383500);
  });
});

describe("squareSum2", function(){
  context("引数が1以上の場合", function(){
    it("1からその数までの二乗和を返す", function(){
      expect(squareSum(10)).to.be(385);
      expect(squareSum(1000)).to.be(33383500);
    });
  });
  context("引数が1より小さい場合", function(){
    it("その数から1までの二乗和を返す", function(){
      expect(squareSum(-10)).to.be(386);
      expect(squareSum(-1000)).to.be(33383501);
    });
  });
});

describe("sum", function(){
  const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const B = [0];
  const C = [-5, -4, -3, -2, 1, 0, 1];
  const answer = list => list.reduce((i, j) => i + j);

  it("配列が要素とする数値の合計値を返す", function(){
    expect(sum(A)).to.be(answer(A));
    expect(sum(B)).to.be(answer(B));
    expect(sum(C)).to.be(answer(C));
  });
});

describe("totalProfit", function(){
  const p = (i, o) => i - o;
  const product = (a, b) => a.map((v, i) => [v, b[i]]);
  const s = (a, b) =>
          product(a, b)
          .map(i => p(i[0], i[1]))
          .reduce((i,j) => i + 1);

  const NULL = [0];
  const A = [100, 100, 100];

  context("同じ配列を与えた時", function(){
    it("0を返す", function(){
      expect(totalProfit(NULL, NULL)).to.be(s(NULL, NULL));
      expect(totalProfit(A, A)).to.be(s(A, A));
    });
  });

  contet("それ以外", function(){
    it("引数1の総和から、引数2の総和を引く", function(){
      expect(totalProfit(NULL, A)).to.be(s(NULL, A));
    });
  });
});
