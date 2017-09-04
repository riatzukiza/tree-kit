

(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;
var Descriptions = {  };
var R = require("ramda");
var fmap = R.curry(((f, a) => {
	
  return a.map(f);

}));
var is = { 
  string( v ){ 
    
      return typeof v === "string";
    
   }
 };
is.empty__QUERY = (function is$empty__QUERY$(value) {
  /* is.empty? node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow node_modules/kit/inc/core/fp.sibilant:14:0 */

  return (() => {
  	
    return (new errType(message));
  
  });
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of node_modules/kit/inc/core/fp.sibilant:17:0 */

  return o.getValue();
});
var { 
  create,
  extend,
  mixin,
  conditional,
  cond,
  partiallyApplyAfter
 } = require("kit/js/util");
defInterface(Tree, null, value(null), parent(null), depth(0), traverseBranches__QUERY(true), var branch__QUERY = (function branch__QUERY$(value = this.value) {
  /* branch? node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return null === value;
});, var leaf__QUERY = (function leaf__QUERY$(value = this.value) {
  /* leaf? node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return !(null === value);
});, var descend = (function descend$(seq = this.seq, f = this.f, tree = this) {
  /* descend node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return (function() {
    if (0 === seq.length) {
      return tree;
    } else {
      return f(tree, seq);
    }
  }).call(this);
});, var delete = (function delete$(seq = this.seq) {
  /* delete node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  
});, var find = (function find$(seq = this.seq, tree = this) {
  /* find node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return (function() {
    if (0 === seq.length) {
      return tree;
    } else {
      return tree._find(seq);
    }
  }).call(this);
});, var has = (function has$(seq = this.seq, tree = this) {
  /* has node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return (function() {
    if (tree.find(seq)) {
      return true;
    } else {
      return false;
    }
  }).call(this);
});, var insert = (function insert$(seq = this.seq, tree = this) {
  /* insert node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return (function() {
    if (0 === seq.length) {
      return tree;
    } else {
      return (function(node) {
        /* node_modules/kit/inc/macros.sibilant:162:9 */
      
        node.depth = (1 + tree.depth);
        return node.insert(seq.slice(1));
      })(tree._insert(seq));
    }
  }).call(this);
});, var set = (function set$(seq = this.seq, value = this.value, tree = this) {
  /* set node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return tree.insert(seq).value = value;
});, var add = (function add$(key = this.key, tree = this, _children = tree._children) {
  /* add node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  var node = (_children.get(key) || create(tree)(undefined, tree));
  node.key = key;
  return node;
});, var each = (function each$(f = this.f, traverseBranches__QUERY = this.traverseBranches__QUERY, leaf__QUERY = this.leaf__QUERY, _children = this._children) {
  /* each node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  var preorderTraverse = (function preorderTraverse$(node, k) {
    /* preorder-traverse src/index.sibilant:54:4 */
  
    f(node, k);
    return node.each(f);
  });
  return (function() {
    if (traverseBranches__QUERY) {
      return _children.each(preorderTraverse, true, leaf__QUERY, _children);
    } else {
      return _children.each(((node, k) => {
      	
        return (function() {
          if (leaf__QUERY(node)) {
            return f(node, k);
          } else {
            return node.each(f, false, leaf__QUERY, this._children);
          }
        }).call(this);
      
      }));
    }
  }).call(this);
}););
exports.Tree = Tree;
defInterface(TreeMap, value(parent, _children((new Map()))), extend(Tree), var delete = (function delete$(seq = this.seq, tree = this) {
  /* delete node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  var node = tree.find(seq),
      rkeys = seq.reverse();
  console.log("deleting node", node);
  console.log("from tree", tree);
  return rkeys.each(((k) => {
  	
    console.log("deleting child", k);
    node.parent._children.delete(k);
    return node = node.parent;
  
  }));
});, var _find = (function _find$(seq = this.seq, tree = this, _children = tree._children, node = _children.get(seq[0])) {
  /* *find node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  return (function() {
    if (node) {
      return node.find(seq.slice(1));
    } else {
      return false;
    }
  }).call(this);
});, var _insert = (function _insert$(seq = this.seq, _children = this._children, tree = this, node = tree.add(seq[0])) {
  /* *insert node_modules/kit/inc/core/function-expressions.sibilant:30:8 */

  _children.set(seq[0], node);
  return node;
}););
exports.TreeMap = TreeMap;