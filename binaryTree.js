class Node{
    constructor(data,left=null, right=null){
        this.data = data;
        this.left = left
        this.right = right;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    addNode(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return
        }else{
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return
                    }else if(node.left !== null){
                        return searchTree(node.left);
                    }

                }else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return
                    }else if(node.right !== null){
                        return searchTree(node.right);
                    }
                }else{
                    return null;
                }

            }
           return searchTree(node)
        }
    }
    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }
    findMax(){
        let current = this.root;

        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }
}


const bst = new BST();
bst.addNode(10)
bst.addNode(20)
bst.addNode(30)
bst.addNode(40)
bst.addNode(50)
console.log(bst.findMin())
console.log(bst.findMax())
