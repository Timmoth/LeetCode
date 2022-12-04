using System.Runtime.CompilerServices;

namespace Problems;

public class Solution234
{
    public bool IsPalindrome(ListNode h)
    {
        if (h.next == null)
            return true;

        ListNode s = h;
        ListNode? f = h;
        Stack<int> v = new();
        int c = 1;

        while (f != null)
        {
            if ((f = f?.next) != null)
            {
                c++;
            }

            if ((f = f?.next) != null)
            {
                c++;
            }

            // Store the first half of the values on a stack
            v.Push(s.val);

            // Increment the slow runner so we are at the middle of the input
            // when this loop exits
            s = s.next;
        }
        
        // Ignore the middle element if input is odd
        if (c % 2 != 0)
        {
            v.Pop();
        }
        
        while (true)
        {
            if (s.val != v.Pop())
            {
                // Two elements on either side of the input didn't match
                return false;
            }

            if (s.next == null)
            {
                // Reached the end of the input
                return true;
            }

            s = s.next;
        }
    }

    private ListNode front = null;

    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    public bool IsPalindromeRecursive(ListNode head)
    {
        if (head != null)
        {
            if (!IsPalindromeRecursive(head.next))
                return false;

            if (front.val != head.val)
                return false;
            front = front.next;

        }

        return true;
    }
}

public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}
