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
  "matlab": [
    {
      "serial": 1,
      "title": "Measures of Central Tendency",
      "description": "Compute and compare arithmetic mean, median, mode, geometric mean, and harmonic mean for engineering data.",
      "explanation": "The program reads data as a vector and computes different measures of central tendency and displays them with a bar chart.",
      "example": {
        "input": "[1 2 2 3 4 5 7 8 8 4 3 3 2 3]",
        "output": "Arithmetic Mean = 3.9286, Median = 3.0000, Mode = 3.0000, Geometric Mean = 3.3584, Harmonic Mean = 2.8420"
      },
      "keywords": [
        "mean",
        "median",
        "mode",
        "geometric mean",
        "harmonic mean",
        "statistics"
      ],
      "code": "clc;\nclear;\ndata = input('Enter the data values as a vector [ ]: ');\nAM = mean(data);\nMED = median(data);\nMOD = mode(data);\nif all(data > 0)\n    GM = geomean(data);\nelse\n    GM = NaN;\n    disp('Geometric mean not defined for non-positive data.');\nend\nif all(data ~= 0)\n    HM = harmmean(data);\nelse\n    HM = NaN;\n    disp('Harmonic mean not defined when data contains zero.');\nend\nfprintf('\\nMeasures of Central Tendency:\\n');\nfprintf('Arithmetic Mean = %.4f\\n', AM);\nfprintf('Median = %.4f\\n', MED);\nfprintf('Mode = %.4f\\n', MOD);\nfprintf('Geometric Mean = %.4f\\n', GM);\nfprintf('Harmonic Mean = %.4f\\n', HM);\nmeans = [AM, MED, MOD, GM, HM];\nlabels = {'AM', 'Median', 'Mode', 'GM', 'HM'};\nfigure;\nbar(means);\nset(gca, 'XTickLabel', labels);\nxlabel('Measure Type');\nylabel('Value');\ntitle('Comparison of Measures of Central Tendency');\ngrid on;\nfor i = 1:length(means)\n    text(i, means(i), sprintf('%.2f', means(i)),'HorizontalAlignment', 'center','VerticalAlignment', 'bottom','FontSize', 10, 'FontWeight', 'bold');\nend"
    },
    {
      "serial": 2,
      "title": "Measures of Dispersion",
      "description": "Analyze data dispersion using range, quartile deviation, mean deviation, standard deviation, and variance.",
      "explanation": "This program evaluates different measures that describe the spread of data and displays them with a bar chart.",
      "example": {
        "input": "[12 15 18 20 25 30 30]",
        "output": "Range = 18.0000, Quartile Deviation = 6.5000, Mean Deviation = 5.9184, Standard Deviation = 7.1147, Variance = 50.6190"
      },
      "keywords": [
        "range",
        "quartile deviation",
        "mean deviation",
        "standard deviation",
        "variance"
      ],
      "code": "clc;\nclear;\ndata = input('Enter the data values as a vector [ ]: ');\nn = length(data);\nRange = max(data) - min(data);\nQ1 = prctile(data, 25);\nQ3 = prctile(data, 75);\nQD = (Q3 - Q1) / 2;\nMeanVal = mean(data);\nMD = sum(abs(data - MeanVal)) / n;\nSD = std(data);\nVAR = var(data);\nfprintf('\\nMeasures of Dispersion:\\n');\nfprintf('Range = %.4f\\n', Range);\nfprintf('Quartile Deviation = %.4f\\n', QD);\nfprintf('Mean Deviation = %.4f\\n', MD);\nfprintf('Standard Deviation = %.4f\\n', SD);\nfprintf('Variance = %.4f\\n', VAR);\ndispersionValues = [Range, QD, MD, SD, VAR];\nlabels = {'Range', 'QD', 'MD', 'SD', 'Variance'};\nfigure;\nbar(dispersionValues);\nset(gca, 'XTickLabel', labels);\nxlabel('Dispersion Measure');\nylabel('Value');\ntitle('Comparison of Measures of Dispersion');\ngrid on;\nfor i = 1:length(dispersionValues)\n    text(i, dispersionValues(i), sprintf('%.2f', dispersionValues(i)), 'HorizontalAlignment', 'center','VerticalAlignment', 'bottom','FontSize', 10, 'FontWeight', 'bold');\nend"
    },
    {
      "serial": 3,
      "title": "Angle Between Two Surfaces",
      "description": "Compute the angle between two surfaces at a given point and visualize the results.",
      "explanation": "Gradients of both surfaces at a point give normal vectors. The angle between the normals gives the angle between the surfaces.",
      "example": {
        "input": "Point (1, 1), f = x^2 + y^2, g = 2x + y",
        "output": "Angle between the two surfaces at (1.00, 1.00) = 18.43 degrees"
      },
      "keywords": [
        "surface",
        "gradient",
        "angle",
        "normal vector",
        "visualization"
      ],
      "code": "clc;\nclear;\nclose all;\nsyms x y\nf = x^2 + y^2;\ng = 2*x + y;\ngrad_f = gradient(f, [x y]);\ngrad_g = gradient(g, [x y]);\nx0 = 1;\ny0 = 1;\nN1 = double(subs(grad_f, [x y], [x0 y0]));\nN2 = double(subs(grad_g, [x y], [x0 y0]));\ntheta = acosd(dot(N1, N2) / (norm(N1) * norm(N2)));\nfprintf('Angle between the two surfaces at (%.2f, %.2f) = %.2f degrees\\n', x0, y0, theta);\n[X, Y] = meshgrid(-3:0.2:3, -3:0.2:3);\nZ1 = X.^2 + Y.^2;\nZ2 = 2*X + Y;\nfigure;\nsurf(X, Y, Z1, 'FaceAlpha', 0.6);\nhold on;\nsurf(X, Y, Z2, 'FaceAlpha', 0.6);\nz1p = x0^2 + y0^2;\nz2p = 2*x0 + y0;\nquiver3(x0, y0, z1p, N1(1), N1(2), -1, 'k', 'LineWidth', 2);\nquiver3(x0, y0, z2p, N2(1), N2(2), -1, 'r', 'LineWidth', 2);\nlegend('Surface 1', 'Surface 2', 'Normal to Surface 1', 'Normal to Surface 2');\ntitle('Angle Between Two Surfaces at a Point');\nxlabel('x');\nylabel('y');\nzlabel('z');\ngrid on;\nview(3);"
    },
    {
      "serial": 4,
      "title": "Linear Curve Fitting y = ax + b",
      "description": "Fit a linear curve of the form y = ax + b to experimental data using the least squares method.",
      "explanation": "Uses normal equations to compute slope and intercept for the best fit straight line.",
      "example": {
        "input": "x = [1 2 3 4 5], y = [2.1 4.0 6.1 8.2 9.9]",
        "output": "Best fit line: y = 1.9800 x + 0.1200"
      },
      "keywords": [
        "curve fitting",
        "least squares",
        "linear",
        "regression"
      ],
      "code": "clc;\nclear;\nclose all;\nx = input('Enter the independent variable data x as a vector [ ]: ');\ny = input('Enter the dependent variable data y as a vector [ ]: ');\nn = length(x);\nSx = sum(x);\nSy = sum(y);\nSxx = sum(x.^2);\nSxy = sum(x.*y);\nA = [Sxx Sx; Sx n];\nB = [Sxy; Sy];\ncoeff = A \\ B;\na = coeff(1);\nb = coeff(2);\nfprintf('\\nBest fit line: y = %.4f x + %.4f\\n', a, b);\ny_fit = a*x + b;\nfigure;\nplot(x, y, 'o', 'MarkerSize', 8, 'LineWidth', 2);\nhold on;\nplot(x, y_fit, '-', 'LineWidth', 2);\ngrid on;\nxlabel('x (Independent Variable)');\nylabel('y (Dependent Variable)');\nlegend('Experimental Data', 'Best Fit Line', 'Location', 'best');"
    },
    {
      "serial": 5,
      "title": "Power Curve Fitting y = ax^b",
      "description": "Fit a power curve of the form y = ax^b to experimental data using the least squares method.",
      "explanation": "Log transform converts the nonlinear power-law relation into a linear form for least squares fitting.",
      "example": {
        "input": "x = [1 2 3 4 5], y = [2.0 4.1 8.9 15.8 25.2]",
        "output": "Best fit curve: y = 1.7138 x^{1.5840}"
      },
      "keywords": [
        "nonlinear fitting",
        "power law",
        "least squares",
        "logarithm"
      ],
      "code": "clc;\nclear;\nclose all;\nx = input('Enter the independent variable data x as a vector [ ]: ');\ny = input('Enter the dependent variable data y as a vector [ ]: ');\nif any(x <= 0) || any(y <= 0)\n    error('Both x and y values must be positive for power-law fitting.');\nend\nX = log(x);\nY = log(y);\nn = length(x);\nSx = sum(X);\nSy = sum(Y);\nSxx = sum(X.^2);\nSxy = sum(X.*Y);\nA = [Sxx Sx; Sx n];\nB = [Sxy; Sy];\ncoeff = A \\ B;\nb = coeff(1);\nln_a = coeff(2);\na = exp(ln_a);\nfprintf('\\nBest fit curve: y = %.4f x^{%.4f}\\n', a, b);\ny_fit = a * x.^b;\nfigure;\nplot(x, y, 'o', 'MarkerSize', 8, 'LineWidth', 2);\nhold on;\nplot(x, y_fit, '-', 'LineWidth', 2);\ngrid on;\nxlabel('x (Independent Variable)');\nylabel('y (Dependent Variable)');\nlegend('Experimental Data', 'Best Fit Curve', 'Location', 'best');"
    },
    {
      "serial": 6,
      "title": "Quadratic Curve Fitting y = ax\u00b2 + bx + c",
      "description": "Fit a quadratic curve of the form y = ax\u00b2 + bx + c to experimental data using the least squares method.",
      "explanation": "Uses polynomial regression (normal equations for degree 2) to compute the best fit quadratic equation.",
      "example": {
        "input": "x = [1 2 3 4 5], y = [3.1 5.9 10.8 18.2 27.9]",
        "output": "Best fit quadratic curve: y = 1.1643 x^2 + -0.7957 x + 2.7600"
      },
      "keywords": [
        "polynomial fitting",
        "quadratic",
        "least squares",
        "curve fitting"
      ],
      "code": "clc;\nclear;\nclose all;\nx = input('Enter the independent variable data x as a vector [ ]: ');\ny = input('Enter the dependent variable data y as a vector [ ]: ');\nn = length(x);\nSx = sum(x);\nSx2 = sum(x.^2);\nSx3 = sum(x.^3);\nSx4 = sum(x.^4);\nSy = sum(y);\nSxy = sum(x.*y);\nSx2y = sum(x.^2 .* y);\nA = [Sx4 Sx3 Sx2; Sx3 Sx2 Sx; Sx2 Sx n];\nB = [Sx2y; Sxy; Sy];\ncoeff = A \\ B;\na = coeff(1);\nb = coeff(2);\nc = coeff(3);\nfprintf('\\nBest fit quadratic curve:\\n');\nfprintf('y = %.4f x^2 + %.4f x + %.4f\\n', a, b, c);\nx_fit = linspace(min(x), max(x), 200);\ny_fit = a*x_fit.^2 + b*x_fit + c;\nfigure;\nplot(x, y, 'o', 'MarkerSize', 8, 'LineWidth', 2);\nhold on;\nplot(x_fit, y_fit, '-', 'LineWidth', 2);\ngrid on;\nxlabel('x (Independent Variable)');\nylabel('y (Dependent Variable)');\nlegend('Experimental Data', 'Best Fit Curve', 'Location', 'best');"
    },
    {
      "serial": 7,
      "title": "Binomial Distribution Simulation and Analysis",
      "description": "Simulate a binomial distribution using random sampling and compare the sample mean and variance with theoretical values.",
      "explanation": "Generates random samples from a binomial distribution using given parameters n and p, then computes and compares sample statistics with theoretical mean and variance. Also visualizes the distribution using a histogram and overlays the theoretical PMF.",
      "example": {
        "input": "n = 10, p = 0.5, N = 1000",
        "output": "Theoretical Mean = 5.000000, Sample Mean \u2248 4.958000, Theoretical Variance = 2.500000"
      },
      "keywords": [
        "binomial distribution",
        "random sampling",
        "mean",
        "variance",
        "PMF",
        "histogram"
      ],
      "code": "clc;\nclear;\nclose all;\n\nn = input('Enter number of trials (n): ');\np = input('Enter probability of success (p): ');\nN = input('Enter number of samples: ');\n\ndata = binornd(n, p, N, 1);\n\nsample_mean = mean(data);\nsample_variance = var(data);\n\ntheoretical_mean = n*p;\ntheoretical_variance = n*p*(1-p);\n\nfprintf('Theoretical Mean = %f\\n', theoretical_mean);\nfprintf('Sample Mean = %f\\n', sample_mean);\nfprintf('Theoretical Variance = %f\\n', theoretical_variance);\nfprintf('Sample Variance = %f\\n', sample_variance);\n\nfigure;\nhistogram(data, 'Normalization', 'pdf');\nhold on;\n\nx = 0:n;\npmf = binopdf(x, n, p);\nstem(x, pmf, 'r', 'LineWidth', 2);\n\ntitle(['Binomial Distribution (n = ', num2str(n), ', p = ', num2str(p), ')']);\nxlabel('x');\nylabel('Probability');\nlegend('Histogram', 'PMF');\ngrid on;"
    },
    {
      "serial": 8,
      "title": "Poisson Distribution Simulation and Analysis",
      "description": "Simulate a Poisson distribution using random sampling and compare the sample mean and variance with theoretical values.",
      "explanation": "Generates random samples from a Poisson distribution using parameter lambda, then computes and compares sample statistics with theoretical mean and variance. Also visualizes the distribution using a histogram and overlays the theoretical PMF.",
      "example": {
        "input": "lambda = 5, n = 1000",
        "output": "Theoretical Mean = 5.000000\nSample Mean = 5.086000\nTheoretical Variance = 5.000000\nSample Variance = 5.063668"
      },
      "keywords": [
        "poisson distribution",
        "random sampling",
        "mean",
        "variance",
        "PMF",
        "histogram"
      ],
      "code": "clc;\nclear;\nclose all;\n\nlambda = input('Enter lambda: ');\nn = input('Enter number of samples: ');\n\ndata = poissrnd(lambda, n, 1);\n\nsample_mean = mean(data);\nsample_variance = var(data);\n\ntheoretical_mean = lambda;\ntheoretical_variance = lambda;\n\nfprintf('Theoretical Mean = %f\\n', theoretical_mean);\nfprintf('Sample Mean = %f\\n', sample_mean);\nfprintf('Theoretical Variance = %f\\n', theoretical_variance);\nfprintf('Sample Variance = %f\\n', sample_variance);\n\nfigure;\nhistogram(data, 'Normalization', 'pdf');\nhold on;\n\nx = min(data):max(data);\npmf = poisspdf(x, lambda);\nstem(x, pmf, 'r', 'LineWidth', 2);\n\ntitle(['Poisson Distribution (lambda = ', num2str(lambda), ')']);\nxlabel('x');\nylabel('Probability');\nlegend('Histogram', 'PMF');\ngrid on;"
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
