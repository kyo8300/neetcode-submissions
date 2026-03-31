class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let cur = head;
        let prev = null;
        while(cur) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        return prev;
    }
}

// 0 -> 1 -> 2 -> 3 -> null

// 3 -> 2 -> 1 -> 0 -> null