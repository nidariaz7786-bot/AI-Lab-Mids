
const canvas =
    document.getElementById("graphCanvas");

const ctx =
    canvas.getContext("2d");


const tree = {

    name: "Attacker",
    children: [

        {
            name: "Firewall",

            children: [

                {
                    name: "Node3",
                    value: 3
                },

                {
                    name: "Node5",
                    value: 5
                }
            ]
        },

        {
            name: "MailServer",

            children: [

                {
                    name: "Node2",
                    value: 2
                },

                {
                    name: "Node9",
                    value: 9
                }
            ]
        }
    ]
};


const positions = {

    Attacker: { x: 500, y: 80 },

    Firewall: { x: 300, y: 250 },

    MailServer: { x: 700, y: 250 },

    Node3: { x: 150, y: 500 },

    Node5: { x: 400, y: 500 },

    Node2: { x: 600, y: 500 },

    Node9: { x: 850, y: 500 }
};

let highlightedPath = [];


function drawTree() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawConnections(tree);

    drawNodes();
}


function drawConnections(node) {

    if (node.children) {

        node.children.forEach(child => {

            const from =
                positions[node.name];

            const to =
                positions[child.name];

            const edgeKey =
                `${node.name}-${child.name}`;

            ctx.beginPath();

            ctx.moveTo(from.x, from.y);

            ctx.lineTo(to.x, to.y);

            if (
                highlightedPath.includes(edgeKey)
            ) {

                ctx.strokeStyle = "blue";

                ctx.lineWidth = 5;
            }

            else {

                ctx.strokeStyle = "gray";

                ctx.lineWidth = 2;
            }

            ctx.stroke();

            drawConnections(child);
        });
    }
}


function drawNodes() {

    for (let node in positions) {

        const pos = positions[node];

        ctx.beginPath();

        ctx.arc(
            pos.x,
            pos.y,
            35,
            0,
            Math.PI * 2
        );

        if (node === "Attacker") {

            ctx.fillStyle = "red";
        }

        else if (
            node === "Firewall" ||
            node === "MailServer"
        ) {

            ctx.fillStyle = "orange";
        }

        else {

            ctx.fillStyle = "lightgreen";
        }

        ctx.shadowBlur = 15;

        ctx.shadowColor = "white";

        ctx.fill();

        ctx.shadowBlur = 0;

        ctx.fillStyle = "black";

        ctx.font = "bold 15px Arial";

        ctx.fillText(
            node,
            pos.x - 25,
            pos.y + 5
        );

        /* LEAF VALUE */

        if (
            node === "Node3" ||
            node === "Node5" ||
            node === "Node2" ||
            node === "Node9"
        ) {

            const value =
                node.replace("Node", "");

            ctx.fillStyle = "white";

            ctx.fillText(
                value,
                pos.x - 5,
                pos.y + 55
            );
        }
    }
}

drawTree();

/* ================= MINIMAX ================= */

let expandedNodes = 0;

function minimax(
    node,
    maximizingPlayer
) {

    expandedNodes++;

    if (node.value !== undefined) {

        return {
            value: node.value,
            path: [node.name]
        };
    }

    if (maximizingPlayer) {

        let bestValue = -Infinity;

        let bestPath = [];

        node.children.forEach(child => {

            const result =
                minimax(child, false);

            if (result.value > bestValue) {

                bestValue = result.value;

                bestPath = [
                    node.name,
                    ...result.path
                ];
            }
        });

        return {
            value: bestValue,
            path: bestPath
        };
    }

    else {

        let bestValue = Infinity;

        let bestPath = [];

        node.children.forEach(child => {

            const result =
                minimax(child, true);

            if (result.value < bestValue) {

                bestValue = result.value;

                bestPath = [
                    node.name,
                    ...result.path
                ];
            }
        });

        return {
            value: bestValue,
            path: bestPath
        };
    }
}

/* ================= ALPHA BETA ================= */

function alphaBeta(
    node,
    alpha,
    beta,
    maximizingPlayer
) {

    expandedNodes++;

    if (node.value !== undefined) {

        return {
            value: node.value,
            path: [node.name]
        };
    }

    if (maximizingPlayer) {

        let value = -Infinity;

        let bestPath = [];

        for (let child of node.children) {

            const result =
                alphaBeta(
                    child,
                    alpha,
                    beta,
                    false
                );

            if (result.value > value) {

                value = result.value;

                bestPath = [
                    node.name,
                    ...result.path
                ];
            }

            alpha =
                Math.max(alpha, value);

            if (alpha >= beta) {

                break;
            }
        }

        return {
            value,
            path: bestPath
        };
    }

    else {

        let value = Infinity;

        let bestPath = [];

        for (let child of node.children) {

            const result =
                alphaBeta(
                    child,
                    alpha,
                    beta,
                    true
                );

            if (result.value < value) {

                value = result.value;

                bestPath = [
                    node.name,
                    ...result.path
                ];
            }

            beta =
                Math.min(beta, value);

            if (beta <= alpha) {

                break;
            }
        }

        return {
            value,
            path: bestPath
        };
    }
}

/* ================= ANIMATION ================= */

async function animatePath(path) {

    highlightedPath = [];

    for (let i = 0; i < path.length - 1; i++) {

        const edgeKey =
            `${path[i]}-${path[i + 1]}`;

        highlightedPath.push(edgeKey);

        drawTree();

        await new Promise(resolve =>
            setTimeout(resolve, 700)
        );
    }
}

/* ================= RUN ================= */

async function runAlgorithm() {

    expandedNodes = 0;

    highlightedPath = [];

    drawTree();

    const algo =
        document.getElementById(
            "algorithm"
        ).value;

    let result;

    const startTime =
        performance.now();

    if (algo === "minimax") {

        result =
            minimax(tree, true);

        document.getElementById(
            "complexity"
        ).innerText =
            "O(b^d)";
    }

    else {

        result =
            alphaBeta(
                tree,
                -Infinity,
                Infinity,
                true
            );

        document.getElementById(
            "complexity"
        ).innerText =
            "O(b^(d/2))";
    }

    const endTime =
        performance.now();

    document.getElementById(
        "utility"
    ).innerText =
        result.value;

    document.getElementById(
        "expanded"
    ).innerText =
        expandedNodes;

    document.getElementById(
        "time"
    ).innerText =
        (endTime - startTime).toFixed(4);

    document.getElementById(
        "pathBox"
    ).innerText =
        result.path.join(" ➜ ");

    await animatePath(result.path);
}
