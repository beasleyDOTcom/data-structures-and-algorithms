# Find Intersection of two linked lists.

## problem domain:
given the head of two linked lists, return the node at which they intersect.
a -> b -> c 
            \
             d -> e -> f -> g -> null
            /
i -> j -> k
return reference to node at beginning of intersection: a reference to a node with a value of d.

a -> b -> c -> null

a -> b -> c -> null

return null;

# algorithm:
ok, so what are we trying to do here? 
we want to find the intersection
so we want to find the place where two linked lists reference the same node. 
my first thought is to:
-  add each node of listA to a set();
- if a node is in set return node.