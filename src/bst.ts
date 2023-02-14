class BinaryNode {
  data: number;
  left: BinaryNode | null;
  right: BinaryNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: BinaryNode | null;

  constructor() {
    this.root = null;
  }

  insert(data: number) {
    let newNode = new BinaryNode(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, newNode);
    }
  }

  #insertNode(node: BinaryNode, newNode: BinaryNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.#insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.#insertNode(node.right, newNode);
      }
    }
  }

  renderTree<E extends HTMLElement>(containerElement: E) {
    const rootTree = document.createElement('ul');
    rootTree.classList.add('tree-list');

    const node = this.#createNode(this.root);
    if (node) {
      rootTree.appendChild(node);
      containerElement.appendChild(rootTree);
    } else {
      const nullTreeElement = document.createElement('h2');
      nullTreeElement.innerText = 'Null tree';
      containerElement.appendChild(nullTreeElement);
    }
  }

  #createNode(node: BinaryNode | null) {
    if (!node) {
      return null;
    }

    const treeNode = document.createElement('li');
    treeNode.classList.add('tree-node');

    const nodeData = document.createElement('span');
    nodeData.classList.add('node-data');
    nodeData.textContent = node.data.toString();
    treeNode.append(nodeData);

    const treeSubList = this.#createSubTree(node);
    if (treeSubList) {
      treeNode.appendChild(treeSubList);
    }

    return treeNode;
  }

  #createSubTree(node: BinaryNode) {
    if (!node.left && !node.right) {
      return null;
    }

    const treeList = document.createElement('ul');
    treeList.classList.add('tree-list');

    let treeNode: HTMLLIElement | null;

    treeNode = this.#createNode(node.left);
    if (treeNode) {
      treeList.appendChild(treeNode);
    }

    treeNode = this.#createNode(node.right);
    if (treeNode) {
      treeList.appendChild(treeNode);
    }

    return treeList;
  }
}
