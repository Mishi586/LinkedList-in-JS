class Node{
    constructor(data=0)
    {
    this.data=data;
    this.next=null;
    }
};
class LinkedList{
    constructor() {
        this.head = null;
        this.length = 0;
    }

isEmpty()
{
    return this.head==null;
}
addElements(x)
{
    let temp=new Node(x);
    temp.next=this.head;
    this.head=temp;
}
removeElements()
{
    if(!this.isEmpty())
        
            this.head = this.head.next;
}
getElements()
{
    let X=[];
    let temp=this.head;
    while(temp!=null)
    {
        X.push(temp.data);
        temp=temp.next;
    }
    return X;
}
getFirstvalue(){
    if(!this.isEmpty())
    {
        return this.head.data;
    }
}
getLastvalue(){
    if(!this.isEmpty())
    {
        var temp = this.head;
        while(temp.next != null)
        {
            temp = temp.next;
        }
        return temp.data;
    }
}
};

l1=new LinkedList();
console.log(l1.isEmpty());
l1.addElements(20);
l1.addElements(30);
l1.addElements(40);
l1.addElements(50);
l1.addElements(60);
console.log(l1.getElements());
console.log(l1.isEmpty());
console.log(l1.getFirstvalue());
console.log(l1.getLastvalue());
l1.removeElements();
console.log(l1.getElements());



