import { INodeObject } from 'src/GeneralTypes'

class Node {
    value: string;
    left: string | null;
    right: string | null;
    constructor(value: string) {
        this.value = value
        this.left = null
        this.right = null
    }
}

export class BinarySearchTree {
    root: any
    constructor() {
        this.root = null
    }

    insert(newString: string) {
        var newNode = new Node(newString)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (current) {
            if (newString === current.value) {
                return undefined
            }
            if (newString < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }

    find(searchedString: string) {
        if (!this.root) return false
        let current = this.root
        let foundString = false
        while (current && !foundString) {
            if (searchedString.localeCompare(current.value) === -1) {
                current = current.left
            } else if (searchedString.localeCompare(current.value) === 1) {
                current = current.right
            } else {
                foundString = current
            }
        }
        if (!foundString) return undefined
        return foundString
    }

    findSmallestNode(current: INodeObject) {
        while (!current.left === null)
            current = current.left!

        return current
    }
    remove(value: string) {
        this.root = this.removeNode(this.root, value)
    }

    removeNode(current: INodeObject, value: string) {
        if (current === null) return current
        if (value.localeCompare(current.value) === 0) {
            if (current.left === null && current.right === null) {

                return null

            } else if (current.left === null) {

                return current.right

            } else if (current.right === null) {

                return current.left

            } else {
                let tempNode = this.findSmallestNode(current.right)
                current.value = tempNode.value

                current.right = this.removeNode(current.right, tempNode.value)
                return current
            }
        } else if (value < current.value) {

            current.left = this.removeNode(current.left!, value)
            return current

        } else {

            current.right = this.removeNode(current.right!, value)
            return current
        }
    }
}