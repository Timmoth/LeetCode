using System.Runtime.CompilerServices;

namespace Problems.Easy;

public class Solution0234
{
    public bool IsPalindrome(ListNode h)
    {
        if (h.Next == null)
            return true;

        var s = h;
        var f = h;
        Stack<int> v = new();
        var c = 1;

        while (f != null)
        {
            if ((f = f?.Next) != null)
            {
                c++;
            }

            if ((f = f?.Next) != null)
            {
                c++;
            }

            // Store the first half of the values on a stack
            v.Push(s.Val);

            // Increment the slow runner so we are at the middle of the input
            // when this loop exits
            s = s.Next;
        }

        // Ignore the middle element if input is odd
        if (c % 2 != 0)
        {
            v.Pop();
        }

        while (true)
        {
            if (s.Val != v.Pop())
            {
                // Two elements on either side of the input didn't match
                return false;
            }

            if (s.Next == null)
            {
                // Reached the end of the input
                return true;
            }

            s = s.Next;
        }
    }
}

public class ListNode
{
    public int Val;
    public ListNode? Next;
    public ListNode(int val = 0, ListNode? next = null)
    {
        Val = val;
        Next = next;
    }
}