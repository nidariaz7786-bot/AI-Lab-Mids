# AI-Lab-Mids
AI-Based Graph Search Algorithms Simulator


## Cybersecurity Attack Path Visualization System

An Artificial Intelligence and Cybersecurity project that demonstrates how graph search algorithms can be used to simulate cyber attack propagation, intelligent traversal, and optimal path detection inside a computer network.

This project models a cybersecurity infrastructure as a weighted graph where:
- Nodes represent systems/devices
- Edges represent network connections
- Weights represent attack costs or traversal difficulty

The simulator visually demonstrates how different AI algorithms analyze and traverse attack paths in a network.

---

#  Project Overview

In modern cybersecurity, attackers often move through interconnected systems to reach sensitive resources. Understanding these attack paths is essential for building secure and resilient networks.

This project bridges:
- Artificial Intelligence
- Graph Theory
- Cybersecurity

by implementing and visualizing multiple AI search algorithms on a simulated cyber network.

---

#  Features

- Graph-based cybersecurity simulation  
- AI search algorithm implementations  
- Weighted network traversal  
- Step-by-step attack path visualization  
- Cost-based path optimization  
- Local maxima demonstration in Hill Climbing  
- Minimax game tree implementation  
- Alpha-Beta pruning visualization  
- Execution time analysis  
- Nodes expanded comparison  
- Professional graph visualizations  

---

#  Implemented Algorithms

## Uninformed Search Algorithms
- Breadth First Search (BFS)
- Depth First Search (DFS)
- Uniform Cost Search (UCS)

## Informed Search Algorithms
- A* Search Algorithm
- Hill Climbing Algorithm

## Adversarial Search Algorithms
- Minimax Algorithm
- Alpha-Beta Pruning

---

# 🛠 Technologies Used

- Python
- NetworkX
- Matplotlib
- Pandas
- Google Colab
- VS CODE
- HTML/CSS/JS

---

#  Cybersecurity Network Model

The network graph contains:

- Attacker
- Firewall
- Mail Server
- Web Server
- Database Server
- Cloud Node
- Backup Server
- Admin PC

Each edge contains a traversal cost representing:
- Attack complexity
- Network distance
- Security difficulty

---

#  Project Objectives

- Simulate real-world cyber attack propagation
- Apply AI search algorithms to cybersecurity problems
- Visualize traversal and pathfinding behavior
- Compare algorithm efficiency
- Demonstrate heuristic optimization
- Understand local maxima in Hill Climbing
- Demonstrate adversarial search using Minimax and Alpha-Beta Pruning

---

#  Algorithm Outputs

## BFS Traversal

```text
Attacker -> Firewall -> MailServer -> WebServer
-> AdminPC -> BackupServer -> Database -> CloudNode
```

## DFS Result

```text
Discovered Path:
Attacker → Firewall → AdminPC → Database

Total Cost: 9
Nodes Expanded: 4
```

## UCS Result

```text
Optimal Path:
Attacker -> Firewall -> WebServer -> Database

Total Cost: 6
```

## Hill Climbing Failure

```text
⚠ LOCAL MAXIMA DETECTED

Hill Climbing becomes stuck because
all neighboring nodes have worse heuristic values.
```

---

#  Visual Demonstrations

The project includes graphical visualizations for:

- BFS Traversal Tree
- DFS Attack Path
- UCS Optimal Path
- A* Search Path
- Hill Climbing Success
- Hill Climbing Failure (Local Maxima)
- Minimax Decision Tree
- Alpha-Beta Pruning

---

# ⚙️ Installation

## Install Dependencies

```bash
pip install networkx matplotlib pandas
```

---

#  Run the Project

Open the notebook in:
- Google Colab
- Jupyter Notebook


Then run all cells sequentially.

---

#  Live Project Access

## BFS, DFS, UCS & A* Visualization
🔗 https://algorithms-implementatiom-c49877.netlify.app/

## Minimax & Alpha-Beta Pruning
🔗 https://alphabeta-minmax-19d5f990.netlify.app/

---


#  Academic Information

### Course
Artificial Intelligence (CSC 262)

### Department
Computer Science

### Institution
COMSATS University Islamabad, Abbottabad Campus

### Session
Spring 2026

---
#  Supervisor

- Ma'am Zeenat Zulfiqar



---

#  Author

- Nida Riaz
---

#  Future Improvements

- Real-time animated traversal
- Interactive web dashboard
- Dynamic network generation
- Advanced heuristic optimization
- Threat intelligence integration
- Reinforcement learning implementation

---

#  Learning Outcomes

Through this project, students can understand:

- AI graph traversal techniques
- Search algorithm behavior
- Heuristic optimization
- Cyber attack modeling
- Game tree search
- Decision-making algorithms
- Network vulnerability analysis


---

#  Contributing

Contributions, improvements, and suggestions are welcome.

Fork the repository and submit a pull request.

---

#  License

This project is developed for educational and academic purposes.

---

