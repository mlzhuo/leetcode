/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (strs.length == 0) {
		return '';
	}
	if (strs.length == 1) {
		return strs[0];
	}
	let commonStr = '';
	let minStrsLen = Infinity;
	let strsFormat = [];
	for (let i = 0; i < strs.length; i++) {
		const strItem = strs[i];
		strsFormat.push(strItem.split(''));
		minStrsLen = Math.min(minStrsLen, strItem.length);
	}
	for (let i = 0; i < minStrsLen; i++) {
		const len = Array.from(new Set(strsFormat.map(v => v[i]))).length;
		if (len == 1) {
			commonStr += strsFormat[0][i];
		} else {
			return commonStr;
		}
	}
	return commonStr;
};
// @lc code=end
