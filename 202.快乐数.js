/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let result = n;
	let tempObj = {};
	do {
		const arr = (result + '').split('');
		result = arr
			.map(v => Math.pow(v, 2))
			.reduce((total, num) => total + num);
		if (tempObj[result] >= 0) {
			return false;
		} else {
			tempObj[result] = result;
		}
	} while (result !== 1);
	return result === 1;
};
// @lc code=end
