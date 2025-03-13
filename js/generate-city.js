// Vertex data
var vertexPositions, vertexNormals, vertexIndices;

function generate() {
    // (x, y, z)
    vertexPositions = [
        -5.0, -2.0, 5.0,
        5.0, -2.0, 5.0,
        -5.0, -2.0, -5.0,
        5.0, -2.0, -5.0   
    ];

    // (nx, ny, nz)
    vertexNormals = [
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0
    ];

    vertexIndices = [
        0, 1, 2, 1, 2, 3
    ];
}