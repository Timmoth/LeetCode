using Problems;

namespace Tests
{
    public class Problem_383_Tests
    {
        [Theory]
        [InlineData("a", "b", false)]
        [InlineData("aa", "ab", false)]
        [InlineData("aa", "aab", true)]
        public void Test(string ransomNote, string magazine, bool expected)
        {
            Assert.Equal(expected, new Solution383().CanConstruct(ransomNote, magazine));
        }
    }
}