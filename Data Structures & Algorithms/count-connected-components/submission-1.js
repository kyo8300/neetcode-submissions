class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = new Map();
        for(const [a, b] of edges) {
            if(graph.has(a)){
                graph.get(a).push(b);
            } else {
                graph.set(a, [b]);
            }

            if(graph.has(b)){
                graph.get(b).push(a);
            } else {
                graph.set(b, [a]);
            }
        }

        const seen = new Set();
        const dfs = (node) => {
            for(const neighbor of graph.get(node) || []) {
                if(!seen.has(neighbor)) {
                    seen.add(neighbor);
                    dfs(neighbor)
                }
            }
        }

        let count = 0;
        for(let i = 0; i < n; i++) {
            if(!seen.has(i)) {
                seen.add(i);
                count++;
                dfs(i);
            }
        }

        return count;
    }
}
