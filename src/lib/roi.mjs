/** Annual net ROI; subsidy is a scenario input, not an eligibility assessment. */
export function calculateROI(investment, benefit, operating, subsidy) {
  if (![investment, benefit, operating, subsidy].every(Number.isFinite) || investment <= 0 || benefit < 0 || operating < 0 || subsidy < 0 || subsidy > 100) throw new RangeError('Invalid ROI inputs');
  const initial = investment * (1 - subsidy / 100);
  const net = benefit - operating;
  return { initial, net, roi: initial > 0 ? (net - initial) / initial : null, payback: initial > 0 && net > 0 ? initial / net * 12 : null };
}
