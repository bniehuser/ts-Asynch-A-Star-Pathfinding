import { IAAStarField, IAAStarFieldNode } from "../AAStar";
export declare class AAStarSimpleField implements IAAStarField {
    private _map;
    private _useDiagonals;
    constructor(map: number[][], useDiagonals?: boolean);
    private convertMap;
    getNodeAt(x: number, y: number): SimpleNode;
    getNearNodes(node: SimpleNode): IAAStarFieldNode[];
    private addIfWalkable;
    heuristicDistance(a: SimpleNode, b: SimpleNode): number;
}
export declare class SimpleNode implements IAAStarFieldNode {
    private _moveCost;
    private _x;
    private _y;
    constructor(x: number, y: number, moveCost: number);
    getMoveCost(): number;
    readonly x: number;
    readonly y: number;
}
