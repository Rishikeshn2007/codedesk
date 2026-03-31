window.SUBJECT_DATA = {
  "dsa": [
    {
      "serial": 1,
      "title": "Matrix Multiplication",
      "description": "Multiply two matrices using two dimensional arrays.",
      "explanation": "The program reads two matrices and multiplies them using nested loops where each element is calculated by summing the products of corresponding row and column elements.",
      "example": {
        "input": "Rows: 2 Cols: 2\nMatrix A: 1 2 3 4\nMatrix B: 5 6 7 8",
        "output": "19 22\n43 50"
      },
      "keywords": [
        "matrix",
        "2d array",
        "multiplication"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\nvoid main()\\n{\\n    int a[10][10], b[10][10], c[10][10], i, j, k, r, c1;\\n    clrscr();\\n    printf(\"Enter rows and columns: \");\\n    scanf(\"%d%d\", &r, &c1);\\n    printf(\"Enter first matrix:\\n\");\\n    for(i=0;i<r;i++)\\n        for(j=0;j<c1;j++)\\n            scanf(\"%d\", &a[i][j]);\\n    printf(\"Enter second matrix:\\n\");\\n    for(i=0;i<r;i++)\\n        for(j=0;j<c1;j++)\\n            scanf(\"%d\", &b[i][j]);\\n    for(i=0;i<r;i++)\\n        for(j=0;j<c1;j++)\\n        {\\n            c[i][j]=0;\\n            for(k=0;k<c1;k++)\\n                c[i][j]+=a[i][k]*b[k][j];\\n        }\\n    printf(\"Result:\\n\");\\n    for(i=0;i<r;i++)\\n    {\\n        for(j=0;j<c1;j++)\\n            printf(\"%d \", c[i][j]);\\n        printf(\"\\n\");\\n    }\\n    getch();\\n}"
    },
    {
      "serial": 2,
      "title": "Stack Using Array",
      "description": "Menu driven stack implementation using array.",
      "explanation": "The stack is implemented using an array where push inserts at top and pop removes from top following LIFO principle.",
      "example": {
        "input": "1.Push 10\n1.Push 20\n3.Display",
        "output": "20 10"
      },
      "keywords": [
        "stack",
        "push",
        "pop"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#define MAX 5\\nint stack[MAX], top=-1;\\nvoid push()\\n{\\n    int x;\\n    if(top==MAX-1)\\n        printf(\"Stack Overflow\\n\");\\n    else\\n    {\\n        printf(\"Enter element: \");\\n        scanf(\"%d\", &x);\\n        stack[++top]=x;\\n    }\\n}\\nvoid pop()\\n{\\n    if(top==-1)\\n        printf(\"Stack Underflow\\n\");\\n    else\\n        printf(\"Popped: %d\\n\", stack[top--]);\\n}\\nvoid display()\\n{\\n    int i;\\n    if(top==-1)\\n        printf(\"Stack Empty\\n\");\\n    else\\n        for(i=top;i>=0;i--)\\n            printf(\"%d \", stack[i]);\\n}\\nvoid main()\\n{\\n    int ch;\\n    clrscr();\\n    while(1)\\n    {\\n        printf(\"\\n1.Push 2.Pop 3.Display 4.Exit\\n\");\\n        scanf(\"%d\", &ch);\\n        switch(ch)\\n        {\\n            case 1: push(); break;\\n            case 2: pop(); break;\\n            case 3: display(); break;\\n            case 4: return;\\n        }\\n    }\\n}"
    },
    {
      "serial": 3,
      "title": "Queue Using Array",
      "description": "Menu driven queue implementation using array.",
      "explanation": "Queue uses FIFO order where insertion happens at rear and deletion happens at front.",
      "example": {
        "input": "Insert 10, Insert 20, Delete",
        "output": "Deleted element: 10"
      },
      "keywords": [
        "queue",
        "fifo"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#define MAX 5\\nint q[MAX], front=-1, rear=-1;\\nvoid insert()\\n{\\n    int x;\\n    if(rear==MAX-1)\\n        printf(\"Overflow\\n\");\\n    else\\n    {\\n        printf(\"Enter element: \");\\n        scanf(\"%d\", &x);\\n        if(front==-1) front=0;\\n        q[++rear]=x;\\n    }\\n}\\nvoid deleteq()\\n{\\n    if(front==-1||front>rear)\\n        printf(\"Underflow\\n\");\\n    else\\n        printf(\"Deleted: %d\\n\", q[front++]);\\n}\\nvoid display()\\n{\\n    int i;\\n    for(i=front;i<=rear;i++)\\n        printf(\"%d \", q[i]);\\n}\\nvoid main()\\n{\\n    int ch;\\n    clrscr();\\n    while(1)\\n    {\\n        printf(\"\\n1.Insert 2.Delete 3.Display 4.Exit\\n\");\\n        scanf(\"%d\", &ch);\\n        switch(ch)\\n        {\\n            case 1: insert(); break;\\n            case 2: deleteq(); break;\\n            case 3: display(); break;\\n            case 4: return;\\n        }\\n    }\\n}"
    },
    {
      "serial": 4,
      "title": "Singly Linked List",
      "description": "Create and display singly linked list.",
      "explanation": "Nodes are dynamically allocated and linked together using next pointer.",
      "example": {
        "input": "3 nodes: 10 20 30",
        "output": "10 20 30"
      },
      "keywords": [
        "linked list",
        "dynamic memory"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#include <stdlib.h>\\nstruct node{int data; struct node *next;};\\nvoid main()\\n{\\n    struct node *head=NULL,*temp,*newnode;\\n    int n,i,x;\\n    clrscr();\\n    printf(\"Enter number of nodes: \");\\n    scanf(\"%d\", &n);\\n    for(i=0;i<n;i++)\\n    {\\n        newnode=(struct node*)malloc(sizeof(struct node));\\n        scanf(\"%d\", &x);\\n        newnode->data=x;\\n        newnode->next=NULL;\\n        if(head==NULL) head=temp=newnode;\\n        else{ temp->next=newnode; temp=newnode;}\\n    }\\n    temp=head;\\n    while(temp!=NULL)\\n    {\\n        printf(\"%d \", temp->data);\\n        temp=temp->next;\\n    }\\n    getch();\\n}"
    },
    {
      "serial": 5,
      "title": "Doubly Linked List",
      "description": "Create and display a doubly linked list.",
      "explanation": "Each node contains data and two pointers linking to previous and next nodes, allowing traversal in both directions.",
      "example": {
        "input": "3 nodes: 10 20 30",
        "output": "10 20 30"
      },
      "keywords": [
        "doubly linked list",
        "bidirectional"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#include <stdlib.h>\\nstruct node{int data; struct node *prev,*next;};\\nvoid main()\\n{\\n    struct node *head=NULL,*temp,*newnode;\\n    int n,i,x;\\n    clrscr();\\n    printf(\"Enter number of nodes: \");\\n    scanf(\"%d\", &n);\\n    for(i=0;i<n;i++)\\n    {\\n        newnode=(struct node*)malloc(sizeof(struct node));\\n        scanf(\"%d\", &x);\\n        newnode->data=x;\\n        newnode->next=NULL;\\n        newnode->prev=NULL;\\n        if(head==NULL) head=temp=newnode;\\n        else\\n        {\\n            temp->next=newnode;\\n            newnode->prev=temp;\\n            temp=newnode;\\n        }\\n    }\\n    temp=head;\\n    while(temp!=NULL)\\n    {\\n        printf(\"%d \", temp->data);\\n        temp=temp->next;\\n    }\\n    getch();\\n}"
    },
    {
      "serial": 6,
      "title": "Binary Search Tree with Traversals",
      "description": "Create a BST and perform inorder traversal.",
      "explanation": "BST stores elements in sorted order. Inorder traversal prints nodes in ascending order.",
      "example": {
        "input": "Insert: 5 2 8 1 3",
        "output": "1 2 3 5 8"
      },
      "keywords": [
        "bst",
        "tree",
        "inorder"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#include <stdlib.h>\\nstruct node{int data; struct node *left,*right;};\\nstruct node* insert(struct node* root,int x)\\n{\\n    if(root==NULL)\\n    {\\n        root=(struct node*)malloc(sizeof(struct node));\\n        root->data=x;\\n        root->left=root->right=NULL;\\n    }\\n    else if(x<root->data)\\n        root->left=insert(root->left,x);\\n    else\\n        root->right=insert(root->right,x);\\n    return root;\\n}\\nvoid inorder(struct node* root)\\n{\\n    if(root!=NULL)\\n    {\\n        inorder(root->left);\\n        printf(\"%d \", root->data);\\n        inorder(root->right);\\n    }\\n}\\nvoid main()\\n{\\n    struct node *root=NULL;\\n    int n,i,x;\\n    clrscr();\\n    printf(\"Enter number of elements: \");\\n    scanf(\"%d\", &n);\\n    for(i=0;i<n;i++)\\n    {\\n        scanf(\"%d\", &x);\\n        root=insert(root,x);\\n    }\\n    inorder(root);\\n    getch();\\n}"
    },
    {
      "serial": 7,
      "title": "Structures Without Pointer",
      "description": "Store and display student details using structure.",
      "explanation": "Structure groups related data fields together to represent a student record.",
      "example": {
        "input": "Name: Ram Age: 20",
        "output": "Ram 20"
      },
      "keywords": [
        "structure",
        "record"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\nstruct student{char name[20]; int age;};\\nvoid main()\\n{\\n    struct student s;\\n    clrscr();\\n    printf(\"Enter name and age: \");\\n    scanf(\"%s%d\", s.name, &s.age);\\n    printf(\"%s %d\", s.name, s.age);\\n    getch();\\n}"
    },
    {
      "serial": 8,
      "title": "Structures With Pointer",
      "description": "Access structure members using pointer.",
      "explanation": "Pointer to structure allows dynamic handling and member access using arrow operator.",
      "example": {
        "input": "Name: Ram Age: 20",
        "output": "Ram 20"
      },
      "keywords": [
        "structure pointer"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\nstruct student{char name[20]; int age;};\\nvoid main()\\n{\\n    struct student s,*p;\\n    clrscr();\\n    p=&s;\\n    printf(\"Enter name and age: \");\\n    scanf(\"%s%d\", p->name, &p->age);\\n    printf(\"%s %d\", p->name, p->age);\\n    getch();\\n}"
    },
    {
      "serial": 9,
      "title": "Dynamic Memory Allocation",
      "description": "Allocate memory using malloc and display elements.",
      "explanation": "Memory is allocated at runtime and used like an array.",
      "example": {
        "input": "Size: 3 -> 1 2 3",
        "output": "1 2 3"
      },
      "keywords": [
        "malloc",
        "dynamic memory"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#include <stdlib.h>\\nvoid main()\\n{\\n    int *p,n,i;\\n    clrscr();\\n    printf(\"Enter size: \");\\n    scanf(\"%d\", &n);\\n    p=(int*)malloc(n*sizeof(int));\\n    for(i=0;i<n;i++)\\n        scanf(\"%d\", &p[i]);\\n    for(i=0;i<n;i++)\\n        printf(\"%d \", p[i]);\\n    free(p);\\n    getch();\\n}"
    },
    {
      "serial": 10,
      "title": "Hashing Using Linear Probing",
      "description": "Insert elements into hash table using linear probing.",
      "explanation": "If collision occurs, the program searches next empty slot sequentially.",
      "example": {
        "input": "Keys: 10 20 15",
        "output": "Hash table with resolved collisions"
      },
      "keywords": [
        "hashing",
        "linear probing"
      ],
      "code": "#include <stdio.h>\\n#include <conio.h>\\n#define SIZE 10\\nvoid main()\\n{\\n    int ht[SIZE],i,key,n,index;\\n    clrscr();\\n    for(i=0;i<SIZE;i++) ht[i]=-1;\\n    printf(\"Enter number of keys: \");\\n    scanf(\"%d\", &n);\\n    for(i=0;i<n;i++)\\n    {\\n        scanf(\"%d\", &key);\\n        index=key%SIZE;\\n        while(ht[index]!=-1)\\n            index=(index+1)%SIZE;\\n        ht[index]=key;\\n    }\\n    for(i=0;i<SIZE;i++)\\n        printf(\"%d \", ht[i]);\\n    getch();\\n}"
    }
  ],
  "python": [
    {
      "serial": 1,
      "title": "Palindrome Check",
      "description": "Check whether a string reads the same forward and backward.",
      "explanation": "The string is compared with its reversed version. If both are identical, the text is a palindrome.",
      "example": {
        "input": "madam",
        "output": "Palindrome"
      },
      "keywords": [
        "string",
        "reverse",
        "condition"
      ],
      "code": "text = input(\"Enter a string: \")\n\nif text == text[::-1]:\n    print(\"Palindrome\")\nelse:\n    print(\"Not a palindrome\")"
    },
    {
      "serial": 2,
      "title": "Factorial Using Recursion",
      "description": "Calculate factorial of a number recursively.",
      "explanation": "The function multiplies the current number by the factorial of the previous number until it reaches the base case 0 or 1.",
      "example": {
        "input": "5",
        "output": "Factorial: 120"
      },
      "keywords": [
        "recursion",
        "math",
        "function"
      ],
      "code": "def factorial(number):\n    if number == 0 or number == 1:\n        return 1\n    return number * factorial(number - 1)\n\nnum = int(input(\"Enter a number: \"))\nprint(\"Factorial:\", factorial(num))"
    },
    {
      "serial": 3,
      "title": "Student Grade Calculator",
      "description": "Compute the average marks and assign a basic grade.",
      "explanation": "The program calculates the average of the marks list and then assigns a grade based on fixed score ranges.",
      "example": {
        "input": "Marks: [78, 85, 91, 88, 76]",
        "output": "Average: 83.6\nGrade: B"
      },
      "keywords": [
        "average",
        "marks",
        "grade"
      ],
      "code": "marks = [78, 85, 91, 88, 76]\naverage = sum(marks) / len(marks)\n\nif average >= 90:\n    grade = \"A\"\nelif average >= 80:\n    grade = \"B\"\nelif average >= 70:\n    grade = \"C\"\nelse:\n    grade = \"D\"\n\nprint(\"Average:\", average)\nprint(\"Grade:\", grade)"
    }
  ],
  "dbms": [
    {
      "serial": 1,
      "title": "Create Student Table",
      "description": "Create a student table with primary key and basic fields.",
      "explanation": "This SQL statement defines a new table called Students with required columns and a primary key to uniquely identify each row.",
      "example": {
        "input": "Run CREATE TABLE Students ...",
        "output": "Table Students created successfully."
      },
      "keywords": [
        "table",
        "ddl",
        "create"
      ],
      "code": "CREATE TABLE Students (\n    student_id INT PRIMARY KEY,\n    student_name VARCHAR(100) NOT NULL,\n    department VARCHAR(50),\n    semester INT\n);"
    },
    {
      "serial": 2,
      "title": "Insert Student Records",
      "description": "Insert multiple sample student records into the table.",
      "explanation": "The query adds multiple rows to the Students table in a single INSERT statement, making sample data entry faster.",
      "example": {
        "input": "Insert 3 student rows",
        "output": "3 rows inserted."
      },
      "keywords": [
        "insert",
        "records",
        "dml"
      ],
      "code": "INSERT INTO Students (student_id, student_name, department, semester)\nVALUES\n    (1, 'Asha', 'CSE', 4),\n    (2, 'Rahul', 'ISE', 5),\n    (3, 'Meera', 'ECE', 3);"
    },
    {
      "serial": 3,
      "title": "Find Students by Department",
      "description": "Retrieve all students belonging to the CSE department.",
      "explanation": "The SELECT query filters rows using the WHERE clause so only students from the CSE department are returned.",
      "example": {
        "input": "department = 'CSE'",
        "output": "1 | Asha | 4"
      },
      "keywords": [
        "select",
        "where",
        "query"
      ],
      "code": "SELECT student_id, student_name, semester\nFROM Students\nWHERE department = 'CSE';"
    }
  ]
};
