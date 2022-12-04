using Problems;

namespace Tests
{
    public class Problem_234_Tests
    {
        public static IEnumerable<object[]> TestData =>
            new List<object[]>
            {
                    new object[] { true, new ListNode(1) },
                    new object[] { true, new ListNode(1, new ListNode(1)) },
                    new object[] { false, new ListNode(1, new ListNode(2)) },
                    new object[] { true, new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1)))) },
                    new object[] { false, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(1)))) },
                    new object[] { true, new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1)))) },
                    new object[] { false, new ListNode(1, new ListNode(0, new ListNode(0))) },
                    new object[] { true, new ListNode(1, new ListNode(0, new ListNode(1))) }
            };

        [Theory]
        [MemberData(nameof(TestData))]
        public void Test(bool expected, ListNode input)
        {
            Assert.Equal(expected, new Solution234().IsPalindrome(input));
        }
    }
}