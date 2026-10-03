/**
 * Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8 */


/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    const result = [];
    
    function backtrack(current, open, close) {
        // If the current string length is 2*n, we've formed a valid combination
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        // We can add an opening parenthesis if we haven't used all n
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }
        // We can add a closing parenthesis if it won't exceed the number of open ones
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }
    backtrack("", 0, 0);
    return result;
}

// Example usage:
console.log(generateParenthesis(3));
// Output: ["((()))","(()())","(())()","()(())","()()()"]

console.log(generateParenthesis(1));
// Output: ["()"]