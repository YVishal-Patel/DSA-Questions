
class Node
{
	constructor(data)
	{
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree
{
	constructor()
	{
		this.root = null;
	}


insert(data)
{

	var newNode = new Node(data);

	if(this.root === null)
		this.root = newNode;
	else
		this.insertNode(this.root, newNode);
}
insertNode(node, newNode)
{
	if(newNode.data < node.data)
	{
		if(node.left === null)
			node.left = newNode;
		else

			this.insertNode(node.left, newNode);
	}


	else
	{
		if(node.right === null)
			node.right = newNode;
		else
			this.insertNode(node.right,newNode);
	}
}


remove(data)
{

	this.root = this.removeNode(this.root, data);
}

removeNode(node, key)
{

	if(node === null)
		return null;


	else if(key < node.data)
	{
		node.left = this.removeNode(node.left, key);
		return node;
	}

	else if(key > node.data)
	{
		node.right = this.removeNode(node.right, key);
		return node;
	}

	else
	{
		if(node.left === null && node.right === null)
		{
			node = null;
			return node;
		}
		if(node.left === null)
		{
			node = node.right;
			return node;
		}
		
		else if(node.right === null)
		{
			node = node.left;
			return node;
		}
		
		let aux = this.findMinNode(node.right);
		node.data = aux.data;

		node.right = this.removeNode(node.right, aux.data);
		return node;
	}
}

search(node,value){
  if(node === null)
  {
    return null;
  }else if(value < node.value)
  {
    return this.search(node.left, value);
  }
  else if(value > node.value)
  {
    return this.search(node.right, value);
  }
  else{
    return node;
  }
}

getRootNode(){
  return this.root;
}

// Traverse

inorder(node){
  if(node !== null){
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right)
  }
}

preorder(node){
  if(node !== null){
    console.log(node.data);
    this.preorder(node.left);
    this.preorder(node.right);
  }
}

postorder(node){
  if(node !== null){
    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.data)
  }
  
}
	
}


let tree = new BinarySearchTree();
let root = tree.getRootNode();
tree.insert(10)
tree.insert(20)
tree.insert(5)
tree.insert(9)
tree.insert(15)
tree.remove(9);
console.log("search 10 :",  tree.search(10));
console.log(tree)
console.log("preorder :"); tree.inorder(tree.getRootNode())
console.log("postorder : "); tree.postorder(tree.getRootNode())
console.log("preorder"), tree.preorder(tree.getRootNode())

