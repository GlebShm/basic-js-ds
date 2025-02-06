const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.groot = null;
  }
  root() {
    return this.groot ? this.groot: null
  }
  add(data) {
    this.groot = addWithin(this.groot, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.groot, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
  }

  find(data) {
    return findWithin(this.groot, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node ? node : null;
      }

      if (data < node.data) {
        return findWithin(node.left, data);
      } else {
        return findWithin(node.right, data);
      }
    }
  }

  remove(data) {
    this.groot = removeNode(this.groot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data
        node.right = removeNode(node.right, minRight.data);
        return node
      }
    }
  }

  min() {
    if (!this.groot) {
      return null;
    }

    let min = this.groot
    while (min.left) {
      min = min.left
    }
    return min.data
  }

  max() {
    if (!this.groot) {
      return null;
    }

    let max = this.groot
    while (max.right) {
      max = max.right
    }
    return max.data
  }
  }



module.exports = {
  BinarySearchTree,
};
