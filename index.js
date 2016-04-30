module.exports.Bounded = function (data, maxWeight) {
  var m = [[0]] // maximum pack value found so far
  var b = [[0]] // best combination found so far
  var opts = [0] // item index for 0 of item 0
  var P = [1] // item encoding for 0 of item 0
  var choose = 0
  var j
  for (j = 0; j < data.length; j++) {
    opts[j + 1] = opts[j] + data[j].pieces // item index for 0 of item j+1
    P[j + 1] = P[j] * (1 + data[j].pieces) // item encoding for 0 of item j+1
  }
  for (j = 0; j < opts[data.length]; j++) {
    m[0][j + 1] = b[0][j + 1] = 0 // best values and combos for empty pack: nothing
  }
  for (var w = 1; w <= maxWeight; w++) {
    m[w] = [0]
    b[w] = [0]
    for (j = 0; j < data.length; j++) {
      var N = data[j].pieces // how many of these can we have?
      var base = opts[j] // what is the item index for 0 of these?
      for (var n = 1; n <= N; n++) {
        var W = n * data[j].weight // how much do these items weigh?
        var s = w >= W ? 1 : 0 // can we carry this many?
        var v = s * n * data[j].value // how much are they worth?
        var I = base + n // what is the item number for this many?
        var wN = w - s * W // how much other stuff can we be carrying?
        var C = n * P[j] + b[wN][base] // encoded combination
        m[w][I] = Math.max(m[w][I - 1], v + m[wN][base]) // best value
        choose = b[w][I] = m[w][I] > m[w][I - 1] ? C : b[w][I - 1]
      }
    }
  }
  var best = []
  for (j = data.length - 1; j >= 0; j--) {
    best[j] = Math.floor(choose / P[j])
    choose -= best[j] * P[j]
  }
  var result = []
  var wgt = 0
  var val = 0
  for (var i = 0; i < best.length; i++) {
    if (best[i] === 0) continue
    result[result.length] = { count: best[i], item: data[i].item }
    wgt += best[i] * data[i].weight
    val += best[i] * data[i].value
  }
  return { totalWeight: wgt, totalValue: val, items: result }
}
