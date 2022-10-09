class Node { 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 


export class BinarySearchTree { 
    constructor(start){ 
        this.root = start; 
        this.traversal = [];
    } 


    deleteTree() {
        this.root = null;
    }


    getRootNode() { 
        return this.root; 
    } 


    insertNode(data){ 
        var newNode = new Node(data); 
        this.traversal = [];

        if(this.root === null || this.root === undefined) {
            this.root = newNode; 
        }
        else{
            this.insertRecursive(this.root, newNode); 
        }

        this.traversal.push(data);
        return this.traversal;
    } 
    

    insertRecursive(node, newNode) { 
        this.traversal.push(node.data);

        if(newNode.data < node.data) {
            if(node.left === null || node.left === undefined){ 
                node.left = newNode; 
            }
            else{
                this.insertRecursive(node.left, newNode);  
            }
        } 
        else{ 
            if(node.right === null || node.left === undefined) {
                node.right = newNode;
            } 
            else{
                this.insertRecursive(node.right,newNode); 
            }
        } 
    } 


    findInorderSuccessor(node){
        let minValue = node.data;
        while(node.left != null){
            minValue = node.left.data;
            node = node.left;
        }
        return minValue;
    }


    deleteNode(data){
        this.root = this.deleteRecursive(this.root, data);
    }


    deleteRecursive(node, data){
        if (node === null){
            return node;
        }
        if(data < node.data){
            node.left = this.deleteRecursive(node.left, data);
        }
        else if(data > node.data){
            node.right = this.deleteRecursive(node.right, data);
        }
        else{
            if(node.left === null){
                return node.right;
            }
            else if(node.right === null){
                return node.left;
            }
            else{
                node.data = this.findInorderSuccessor(node.right);
                node.right = this.deleteRecursive(node.right, node.data);
            }
        }

        return node;
    }


    breathFT(node){
        if(node === null || node === undefined){
            return [];
        }

        var bstArray = [[node]];
        var valueArray = [[node.data]];

        const treeHeight = this.treeHeight(node);
        let i = 0, j = 0;

        for(i = 0; i < treeHeight; i++){
            var rowNode = [];
            var rowValue = [];
            for(j = 0; j < Math.pow(2, i); j++ ){
                if(bstArray[i][j] === null || bstArray[i][j] === undefined ){
                    rowNode.push(null);
                    rowNode.push(null);

                    rowValue.push(0);
                    rowValue.push(0);
                }
                else{
                    rowNode.push(bstArray[i][j].left);
                    rowNode.push(bstArray[i][j].right);

                    rowValue.push(bstArray[i][j].left ? bstArray[i][j].left.data : 0);
                    rowValue.push(bstArray[i][j].right ? bstArray[i][j].right.data : 0);
                }
            }
            bstArray.push(rowNode);
            valueArray.push(rowValue);
        }
        // console.log("BFT : ", bstArray);
        // console.log("Value BFT : ", valueArray);
        return valueArray;
    }


    treeHeight(node){
        if (node == null)
            return -1;
        else
        {
            var lDepth = this.treeHeight(node.left);
            var rDepth = this.treeHeight(node.right);
    
            if (lDepth > rDepth)
                return (lDepth + 1);
            else
                return (rDepth + 1);
        }
    }

}
