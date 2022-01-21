/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for (let j = 0; j < nums.length; j++) {
        const y = target - nums[j];
        if (map.has(y) && map.get(y) !== j) {
            return [map.get(y), j]
        };
        // 建立索引映射关系
        map.set(nums[j], j)
    }
    return map as unknown as number[];
};
// @lc code=end

export default twoSum;
