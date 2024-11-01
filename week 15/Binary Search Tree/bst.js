class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(data) {
        let newNode = new Node(data)
        let current = this.root
        if (this.root === null) {
            this.root = newNode
            return
        }
        while (true) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode
                    return
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return
                } else {
                    current = current.right
                }
            }
        }
    }
    contains(data) {
        let current = this.root
        while (current !== null) {
            if (current.data === data) {
                return true
            } else if (data < current.data) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return false
    }

    inorder(node) {
        if (node) {
            this.inorder(node.left)
            console.log(node.data)
            this.inorder(node.right)
        }
    }
    preorder(node) {
        if (node) {
            console.log(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }
    postorder(node) {
        if (node) {
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.data)
        }
    }
}

let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(4)
bst.insert(17)
bst.insert(1)
bst.insert(123)
bst.insert(24)
console.log('inorder')
bst.inorder(bst.root)
console.log('preorder')
bst.preorder(bst.root)
console.log('postorder')
bst.postorder(bst.root)


// console.log(bst.root)
// console.log(bst.contains(10))
// console.log(bst.contains(17))
// console.log(bst.contains(1))
// console.log(bst.contains(4))
// console.log(bst.contains(0))
// console.log(bst.contains(15))
