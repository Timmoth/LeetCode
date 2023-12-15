using Problems;

namespace Tests
{
    public class Tests0234
    {
        private readonly Solution0234 _solution = new();
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
            Assert.Equal(expected, _solution.IsPalindrome(input));
        }
    }
}