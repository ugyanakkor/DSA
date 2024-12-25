type Node<T> = {
  value: T,
  next?: Node<T>,
}

export default class Queue<T> {
  private length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
      this.head = this.tail = undefined;
      this.length = 0;
  }

  enqueue(item: T): void {
    const node =  { value: item } as Node<T>;

    this.length++;
    if(!this.tail) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  dequeue(): T | undefined {
    if (!this.head) return;

    this.length--;
    const head = this.head;
    this.head = this.head.next;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

const queue =  new Queue();
console.log(queue.peek()); // Should print undefined
queue.enqueue(3); // Should not print anything 
queue.enqueue('N'); // Should not print anything 
queue.enqueue(21); // Should not print anything
queue.enqueue(69); // Should not print anything
console.log(queue.dequeue()); // Should print 3
console.log(queue.dequeue()); // Should print N
console.log(queue.dequeue()); // Should print 21
console.log(queue.dequeue()); // Should print 69
console.log(queue.dequeue()); // Should print undefined

